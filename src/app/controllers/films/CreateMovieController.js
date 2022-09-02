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

        const movieCreated = await this.service.create(
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

        return res.json(movieCreated)
    }
}