const ListMovieService = require('../../services/films/ListMovieService')

const DeleteMovieService = {
    delete: (id) => {
        const movies = ListMovieService.itens()

        const movieIndex = movies.findIndex(movie => movie.id === Number(id))

        movies.splice(movieIndex, 1)

        return {
            succeed: true,
            message: movies
        }
    }
}

module.exports = DeleteMovieService