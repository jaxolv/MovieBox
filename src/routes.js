import Router from "express";
import multer from "multer";

import usersController from './app/controllers/users/UsersController';
import IndexValidator from './middlewares/IndexValidator';
import MoviesValidator from './middlewares/MoviesValidator';
import UsersValidator from './middlewares/UsersValidator';
import uploadFileController from './app/controllers/utils/uploadFileController';
import multerConfig from './config/multer';

const routes = new Router();
const uploadFile = multer({ storage: multerConfig })

routes.post('/uploads', uploadFile.single('file'), uploadFileController.storeFile);

// CRUD movies
import ListAllMoviesController from "./app/controllers/films/ListAllMoviesController";
import CreateMovieController from "./app/controllers/films/CreateMovieController";
import UpdateMovieController from "./app/controllers/films/UpdateMovieController";
import DeleteMovieController from "./app/controllers/films/DeleteMovieController";

const listAllMoviesController = new ListAllMoviesController();
const createMovieController = new CreateMovieController();
const updateMovieController = new UpdateMovieController();
const deleteMovieController = new DeleteMovieController();

routes.post('/movies/create', MoviesValidator, (req, res) => createMovieController.create(req, res) );
routes.get('/movies/list', (req, res) => listAllMoviesController.listAll(req, res));
routes.get('/movies/name', (req, res) => listAllMoviesController.findByName(req, res));
routes.get('/movies/:year', (req, res) => listAllMoviesController.findByYear(req, res));
routes.get('/movies/genre', (req, res) => listAllMoviesController.findByGenre(req, res));
routes.put('/movies/:id/edit', IndexValidator, MoviesValidator, (req, res) => updateMovieController.update(req, res));
routes.delete('/movies/:id/delete', IndexValidator, (req, res) => deleteMovieController.delete(req, res));

// CRUD users
routes.post('/users/create', UsersValidator, usersController.create);

export default routes;