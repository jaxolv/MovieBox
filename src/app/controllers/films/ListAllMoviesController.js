import ListMovieService from '../../services/films/ListMovieService';

class ListAllMoviesController {
    constructor() {}

    listAll(req, res) {
        const movies = ListMovieService.itens()

        return res.status(200).json(movies)
    }

    findByName(req, res) {
        const { title } = req.query

        const result = ListMovieService.title(title)

        if (!result.succeed) {
            return res.status(400).json(result.message)
        }

        return res.status(200).json(result.message)
    }

    findByYear(req, res) {
        const { year } = req.params

        const result = ListMovieService.year(year)

        if (!result.succeed) {
            return res.status(400).json(result.message)
        }

        return res.status(200).json(result.message)
    }

    findByGenre(req, res) {
        const { genre } = req.query

        const result = ListMovieService.genre(genre)

        if (result.length === 0) {
            const erro = {message: "DESCUBRA"}
            return res.status(400).json(erro.message)
        }

        return res.status(200).json(result)
    }
}

export default ListAllMoviesController;