import MovieModel from '../../models/films/MovieModel';

class ListMovieService {
    constructor() {}

    itens() {

        const film1 = new MovieModel(
            "a07b45c4-23aa-4e73-a7bb-cfdd9b3987c6",
            "Seven",
            "Os Sete Crimes Capitais",
            1995,
            "EUA",
            127,
            ["thriller", "investigation"],
            8.6,
            { "tomatometer": 86, "audience": 95 })

        const film2 = new MovieModel(
            "9c1fcbc5-2da8-4fd5-a521-5df516b6499e",
            "Cidade de Deus",
            "",
            2002,
            "BRA",
            131,
            ["drama", "crime"],
            8.6,
            { "tomatometer": 91, "audience": 97 })

        const film3 = new MovieModel(
            "1a14c837-8ff3-4bca-bf62-32bdce263524",
            "Shrek 2",
            "",
            2004,
            "EUA",
            92,
            ["comedy", "animation"],
            7.3,
            { "tomatometer": 89, "audience": 69 })

        const film4 = new MovieModel(
            "fbca1f07-f327-4e5a-964f-e98ca3caacab",
            "Os Suspeitos",
            "",
            1995,
            "EUA",
            106,
            ["drama", "investigation"],
            8.5,
            { "tomatometer": 88, "audience": 96 })

        const film5 = new MovieModel(
            "d9016a66-53b6-406e-a95f-739b9c4f9bce",
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
            "3b1f216a-ac60-4fb0-b790-827e9c2e80ba",
            "A Grande Aposta",
            "",
            2015,
            "EUA",
            130,
            ["drama", "comedy"],
            7.8,
            { "tomatometer": 89, "audience": 88 }
        )

        return [film1, film2, film3, film4, film5, film6]
    }

    title(title) {
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
    }

    year(year) {
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
    }
}

export default ListMovieService;