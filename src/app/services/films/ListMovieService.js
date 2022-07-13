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
            "Avengers 4",
            "Endgame",
            2019,
            "EUA",
            181,
            ["action", "superhero"],
            8.4,
            { "tomatometer": 94, "audience": 90 })

        const film4 = new MovieModel(
            4,
            "The Usual Suspects",
            "",
            1995,
            "EUA",
            106,
            ["drama", "investigation"],
            8.5,
            { "tomatometer": 88, "audience": 96 })

        return [film1, film2, film3, film4]
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

    /* MUITA COISA A CORRIGIR:
    
    genre: (genre) => {
        const movies = ListMovieService.itens()

        for (let i = 0; movies.length > i; i++) {
            for (let j = 0; movies[i].genre.length > j; j++) {
                if (movies[i].genre[j] == genre) {
                    return {
                        succeed: true,
                        message: movies[i]
                    }
                } else {
                    return {
                        succeed: false,
                        message: "Algo deu errado!"
                    }
                }
            }
        }
    } */
}

module.exports = ListMovieService