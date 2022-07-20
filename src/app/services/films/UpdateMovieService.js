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

        const movies = ListMovieService.itens()

        const movieIndex = movies.findIndex(movie => movie.id === Number(id))

        /* if (movieIndex === -1) {
            return {
                succeed: false,
                message: "ID não corresponde a nenhum filme cadastrado."
            }
        } */

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