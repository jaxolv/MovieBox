import ListMovieService from '../../services/films/ListMovieService';

export default class ListAllMoviesController {
    constructor() {
        this.service = new ListMovieService();
    }

    async index(req, res) {
        const { title } = req.query;

        const movies = await this.service.listAll(title)

        res.status(200).json(movies)
    }

    async year(req, res) {
        const { year } = req.query

        const movie = await this.service.byYear(year)

        res.status(200).json(movie)
    }

    async genre(req, res) {
        const { genre } = req.query

        const movie = await this.service.byGenre(genre)

        res.json(movie)
    }
}
