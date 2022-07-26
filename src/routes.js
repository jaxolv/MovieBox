const Router = require('express');
const routes = new Router();
const multer = require('multer')
const multerConfig = require('./config/multer');

const moviesController = require('./app/controllers/films/MoviesController');
const IndexValidator = require('./middlewares/IndexValidator');
const MoviesValidator = require('./middlewares/MoviesValidator');
const uploadFileController = require('./app/controllers/utils/uploadFileController');
const uploadFile = multer({ storage: multerConfig })

routes.post('/uploads', uploadFile.single('file'), uploadFileController.storeFile);

routes.post('/movies/create', MoviesValidator, moviesController.create);
routes.get('/movies/list', moviesController.listAll);
routes.get('/movies/name', moviesController.findByName);
routes.get('/movies/:year', moviesController.findByYear);
routes.get('/movies/genre', moviesController.findByGenre);
routes.put('/movies/:id/edit', IndexValidator, MoviesValidator, moviesController.update);
routes.delete('/movies/:id/delete', IndexValidator, moviesController.delete);

module.exports = routes;