import MovieModel from '../../models/films/MovieModel';

export default class ListMoviesService {
    constructor() { }

    async listAll(title) {
        try {
            if (title) {
                return await this.byTitle(title);
            }

            const movies = await MovieModel.findAll()

            return movies

        } catch (error) {
            console.log(error)
            return { error: error.message }
        }
    }

    async byTitle(movieTitle) {
        try {
            const movie = await MovieModel.findAll({
                where: { title: movieTitle }
            })

            if (!movie) {
                return { message: "Movie not found" }
            }

            return movie

        } catch (error) {
            return { error: error.message }
        }
    }

    async byYear(yearOfTheMovie) {
        try {
            const movie = await MovieModel.findAll({
                where: { year: yearOfTheMovie}
            })

            if (!movie) {
                return { message: "Movie not found"}
            }

            return movie

        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }

    async byGenre(genreOfTheMovie) {
        try {
            const movie = await MovieModel.findAll({
                where: { genre: genreOfTheMovie}
            })

            if (!movie) {
                return { message: "Movie not found"}
            }

            return movie

        } catch (error) {
            console.log(error)
            return { erro: error.message }
        }
    }
}
