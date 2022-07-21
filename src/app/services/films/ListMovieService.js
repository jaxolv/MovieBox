const MovieModel = require('../../models/films/MovieModel')

const ListMovieService = {
    itens: () => {

        const film1 = new MovieModel(
            1,
            "Seven",
            "Os Sete Crimes Capitais",
            1995,
            "EUA",
            127,
            ["thriller", "investigation"],
            8.6,
            { "tomatometer": 86, "audience": 95 })

        const film2 = new MovieModel(
            2,
            "Cidade de Deus",
            "",
            2002,
            "BRA",
            131,
            ["drama", "crime"],
            8.6,
            { "tomatometer": 91, "audience": 97 })

        const film3 = new MovieModel(
            3,
            "Shrek 2",
            "",
            2004,
            "EUA",
            92,
            ["comedy", "animation"],
            7.3,
            { "tomatometer": 89, "audience": 69 })

        const film4 = new MovieModel(
            4,
            "Os Suspeitos",
            "",
            1995,
            "EUA",
            106,
            ["drama", "investigation"],
            8.5,
            { "tomatometer": 88, "audience": 96 })

        const film5 = new MovieModel(
            5,
            "Thor 4",
            "Amor e Trovão",
            2022,
            "EUA",
            125,
            ["superhero", "comedy"],
            6.8,
            { "tomatometer": 68, "audience": 78 }
        )

        const film6 = new MovieModel(
            6,
            "Doutor Estranho 2",
            "No Multiverso da Loucura",
            2022,
            "EUA",
            126,
            ["superhero", "adventure"],
            7,
            { "tomatometer": 74, "audience": 85 }
        )

        return [film1, film2, film3, film4, film5, film6]
    },

    title: (title) => {
        const movies = ListMovieService.itens()

        const movieIndex = movies.findIndex(movie => movie.title === title)

        if (movieIndex === -1) {
            return {
                succeed: false,
                message: "Nome inválido."
            }
        }

        return {
            succeed: true,
            message: movies[movieIndex]
        }
    },

    year: (year) => {
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
    },

    genre: (genre) => {
        const movies = ListMovieService.itens()

        return movies.filter((movie) => {
            if (movie.genre.find(Genre => Genre === genre)) { return movie }
        })
    }
}

module.exports = ListMovieService