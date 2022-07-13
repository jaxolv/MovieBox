const array = require('../utils/empty')
const CreateMovieService = require('../../services/films/CreateMovieService')
const ListMovieService = require('../../services/films/ListMovieService')
const UpdateMovieService = require('../../services/films/UpdateMovieService')
const DeleteMovieService = require('../../services/films/DeleteMovieService')
const { v4 } = require('uuid')

const controller = {
    create: (req, res) => {
        const movies = array

        const {
            title,
            subtitle,
            year,
            country,
            duration,
            genre,
            imdb,
            rotten
        } = req.body

        if (!title || !duration || !genre) {
            const erro = { message: "Os campos 'título', 'duração' e 'gênero' são obrigatórios." }
            return res.status(400).json(erro.message)
        }

        const movieCreated = CreateMovieService.create(
            v4(),
            title,
            subtitle,
            year,
            country,
            duration,
            genre,
            imdb,
            rotten
        )

        if (!movieCreated.succeed) {
            return res.status(400).json(movieCreated.message)
        }

        movies.push(movieCreated.message)

        return res.status(200).json(movies)
    },

    listAll: (req, res) => {
        const movies = ListMovieService.itens()

        return res.status(200).json(movies)
    },

    findByName: (req, res) => {
        const { title } = req.query

        const result = ListMovieService.title(title)

        if (!result.succeed) {
            return res.status(400).json(result.message)
        }

        return res.status(200).json(result.message)
    },

    findByYear: (req, res) => {
        const { year } = req.params

        const result = ListMovieService.year(year)

        if (!result.succeed) {
            return res.status(400).json(result.message)
        }

        return res.status(200).json(result.message)
    },

    /* findByGenre: (req, res) => {
        const { genre } = req.query

        const result = ListMovieService.genre(genre)

        if (!result.succeed) {
            return res.status(400).json(result.message)
        }

        return res.status(200).json(result.message)
    }, */

    update: (req, res) => {
        const { id } = req.params

        const {
            title,
            subtitle,
            year,
            country,
            duration,
            genre,
            imdb,
            rotten
        } = req.body

        if (!title || !duration || !genre) {
            const erro = { message: "Os campos 'título', 'duração' e 'gênero' são obrigatórios." }
            return res.status(400).json(erro.message)
        }

        const updatedMovie = UpdateMovieService.update(
            Number(id),
            title,
            subtitle,
            year,
            country,
            duration,
            genre,
            imdb,
            rotten
        )

        if (!updatedMovie.succeed) {
            return res.status(400).json(updatedMovie.message)
        }

        return res.status(200).json(updatedMovie.message)
    },

    delete: (req, res) => {
        const { id } = req.params

        const result = DeleteMovieService.delete(id)

        if (!result.succeed) {
            return res.status(400).json(result.message)
        }

        return res.status(200).json(result.message)
    }
}

module.exports = controller