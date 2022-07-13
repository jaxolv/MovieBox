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
        if (country.length > 3) {
            return {
                succeed: false,
                message: "Identifique no campo o país com apenas 3 caracteres maiúsculos."
            }
        }

        if (genre.length > 2) {
            return {
                succeed: false,
                message: "Apenas 2 gêneros por filme devem ser cadastrados."
            }
        }

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