import MovieModel from "../../models/films/MovieModel"

export default class DeleteMovieService {
    constructor() { }

    async deleteById(id) {
        try {
            const movie = await MovieModel.findByPk(id);

            if (!movie) {
                return { message: "Movie not found" }
            }

            const deletedMovie = await movie.destroy()

            return deletedMovie
        } catch (error) {
            console.log(error)
            return { error: error.message }
        }
    }
}
