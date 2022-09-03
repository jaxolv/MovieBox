import MovieModel from "../../models/films/MovieModel"

export default class UpdateMovieService {
    constructor() { }

    async updateAllData(
        id,
        title,
        subtitle,
        year,
        country,
        duration,
        genre,
        imdb,
        rotten
    ) {
        try {
            const movie = await MovieModel.findByPk(id)

            if (!movie) {
                return { erro: "Movie not found." }
            }

            const [numberOfRegistersUpdated] = await MovieModel.update(
                {
                    title,
                    subtitle,
                    year,
                    country,
                    duration,
                    genre,
                    imdb,
                    rottenTomatometer,
                    rottenAudience
                },
                {
                    where: { id }
                }
            )

            if (numberOfRegistersUpdated === 0) {
                return { erro: "Identical data" }
            } else {
                return {
                    id,
                    title,
                    subtitle,
                    year,
                    country,
                    duration,
                    genre,
                    imdb,
                    rottenTomatometer,
                    rottenAudience
                }
            }
        } catch (error) {
            console.log(error)
            return { error: error.message }
        }
    }
}
