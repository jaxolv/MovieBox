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