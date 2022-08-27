import UpdateMovieService from '../../services/films/UpdateMovieService';

export default class UpdateMovieController {
    constructor() { }

    update(req, res) {
        const { id } = req.params

        const {
            title,
            subtitle,
            year,
            country,
            duration,
            genre,
            imdb,
            rotten
        } = req.body

        const updatedMovie = UpdateMovieService.update(
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

        if (!updatedMovie.succeed) {
            return res.status(400).json(updatedMovie.message)
        }

        return res.status(200).json(updatedMovie.message)
    }
}