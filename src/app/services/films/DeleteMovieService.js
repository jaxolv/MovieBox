const ListMovieService = require('../../services/films/ListMovieService')

const DeleteMovieService = {
    delete: (id) => {
        const movies = ListMovieService.itens()

        const movieIndex = movies.findIndex(movie => movie.id === id)

        if (movieIndex === -1) {
            return {
                succeed: false,
                message: "ID não referente a qualquer filme."
            }
        }

        movies.splice(movieIndex, 1)

        return {
            succeed: true,
            message: movies
        }
    }
}

module.exports = DeleteMovieService