const MovieModel = require('../../models/films/MovieModel')

const CreateMovieService = {
    create: (
        id,
        title,
        subtitle,
        year,
        country,
        duration,
        genre,
        imdb,
        rotten
    ) => {
        const movie = new MovieModel(
            id,
            title,
            subtitle,
            year,
            country,
            duration,
            genre,
            imdb,
            rotten
        )

        return { succeed: true, message: movie }
    }
}

module.exports = CreateMovieService