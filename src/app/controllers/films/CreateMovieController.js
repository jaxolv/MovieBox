import CreateMovieService from '../../services/films/CreateMovieService';
import { v4 } from 'uuid';

export default class CreateMovieController {
    constructor() { }

    create(req, res) {
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

        movies.unshift(movieCreated.message)

        return res.status(200).json(movies)
    }
}