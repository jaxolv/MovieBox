import UpdateMovieService from '../../services/films/UpdateMovieService';

export default class UpdateMovieController {
    constructor() {
        this.service = new UpdateMovieService();
    }

    async update(req, res) {
        const { id } = req.params

        const {
            title,
            subtitle,
            year,
            country,
            duration,
            genre,
            imdb,
            rottenTomatometer,
            rottenAudience
        } = req.body

        const updatedMovie = await this.service.updateAllData(
            id,
            title,
            subtitle,
            year,
            country,
            duration,
            genre,
            imdb,
            rottenTomatometer,
            rottenAudience
        )

        console.log(updatedMovie)
        res.status(200).json(updatedMovie)
    }
}