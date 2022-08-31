import CreateMovieService from '../../services/films/CreateMovieService';
import { v4 } from "uuid";
export default class CreateMovieController {
    constructor() {
        this.service = new CreateMovieService();
    }

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
            v4(),
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