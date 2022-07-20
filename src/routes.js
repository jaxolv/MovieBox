const Router = require('express');
const routes = new Router();

const moviesController = require('./app/controllers/films/MoviesController')
const { MoviesValidator, IndexValidator } = require('./middlewares/MoviesValidator')

routes.post('/movies', MoviesValidator, moviesController.create)
// routes.get('/movies', moviesController.listAll)
// routes.get('/movies', moviesController.findByName)
routes.get('/movies/:year', moviesController.findByYear)
routes.get('/movies', moviesController.findByGenre)
routes.put('/movies/:id', IndexValidator, MoviesValidator, moviesController.update)
routes.delete('/movies/:id', IndexValidator, moviesController.delete)

module.exports = routes;