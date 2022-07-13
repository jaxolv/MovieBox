const ListMovieService = require('../../services/films/ListMovieService')

const UpdateMovieService = {
    update: (
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

        const movies = ListMovieService.itens()

        const movieIndex = movies.findIndex(movie => movie.id === Number(id))

        if (movieIndex === -1) {
            return {
                succeed: false,
                message: "ID não corresponde a nenhum filme cadastrado."
            }
        }

        movies[movieIndex] = {
            id,
            title,
            subtitle,
            year,
            country,
            duration,
            genre,
            imdb,
            rotten
        }

        return { succeed: true, message: movies[movieIndex] }
    }
}

module.exports = UpdateMovieService