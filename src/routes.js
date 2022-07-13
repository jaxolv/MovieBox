const Router = require('express');

const routes = new Router();

const moviesController = require('./app/controllers/films/MoviesController')

routes.post('/movies', moviesController.create)
routes.get('/movies', moviesController.listAll)
// routes.get('/movies', moviesController.findByName)
// routes.get('/movies', moviesController.findByGenre)
routes.get('/movies/:year', moviesController.findByYear)
routes.put('/movies/:id', moviesController.update)
routes.delete('/movies/:id', moviesController.delete)

module.exports = routes;