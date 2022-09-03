import { v4 } from "uuid";
import CreateMovieService from '../../services/films/CreateMovieService';

export default class CreateMovieController {
    constructor() { this.service = new CreateMovieService(); }

    async create(req, res) {
        const {
            title,
            subtitle,
            year,
            country,
            duration,
            genre,
            imdb,
            rottenTomatometer,
            rottenAudience
        } = req.body

        const movieCreated = await this.service.createMovie(
            title,
            subtitle,
            year,
            country,
            duration,
            genre,
            imdb,
            rottenTomatometer,
            rottenAudience
        )

        console.log(movieCreated)

        res.status(200).json(movieCreated)
    }
}