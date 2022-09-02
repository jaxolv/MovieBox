import MovieModel from '../../models/films/MovieModel';

export default class ListMoviesService {
    constructor() {}

    async listAll(title) {
        try {
            if (title) {
                return await this.byTitle(title);
            }

            const movies = await MovieModel.findAll()

            return movies

        } catch(error) {
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
                return { message: "Movie not found"}
            }

            return movie

        } catch(error) {
            return {error: error.message}
        }
    }

    /* year(year) {
        const movies = ListMovieService.itens()

        const list = movies.filter((movie) => movie.year === Number(year))

        if (list.length === 0) {
            return {
                succeed: false,
                message: "Nenhum filme do ano informado está cadastrado."
            }
        }

        return {
            succeed: true,
            message: list
        }
    }

    genre(genre) {
        const movies = ListMovieService.itens()

        return movies.filter((movie) => { if (movie.genre.find(Genre => Genre === genre)) { return movie } })
    } */
}
