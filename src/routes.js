const Router = require('express');
const routes = new Router();

const moviesController = require('./app/controllers/films/MoviesController');
const IndexValidator = require('./middlewares/IndexValidator');
const MoviesValidator = require('./middlewares/MoviesValidator');

routes.post('/movies', MoviesValidator, moviesController.create);
// routes.get('/movies', moviesController.listAll);
// routes.get('/movies', moviesController.findByName);
routes.get('/movies', moviesController.findByGenre);
routes.get('/movies/:year', moviesController.findByYear);
routes.put('/movies/:id', IndexValidator, MoviesValidator, moviesController.update);
routes.delete('/movies/:id', IndexValidator, moviesController.delete);

module.exports = routes;