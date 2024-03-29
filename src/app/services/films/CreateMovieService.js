import { v4 } from "uuid";
import MovieModel from '../../models/films/MovieModel'

export default class CreateMovieService {
    constructor() { }

    async createMovie(
        title,
        subtitle,
        year,
        country,
        duration,
        genre,
        imdb,
        rottenTomatometer,
        rottenAudience
    ) {
        try {
            const newMovie = await MovieModel.create({
                id: v4(),
                title,
                subtitle,
                year,
                country,
                duration,
                genre,
                imdb,
                rottenTomatometer,
                rottenAudience
            })
            console.log(newMovie)
            return newMovie;

        } catch (error) {
            return { error: error.message }
        }
    }
}
