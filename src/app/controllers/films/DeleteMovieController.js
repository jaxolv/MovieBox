import DeleteMovieService from '../../services/films/DeleteMovieService';

class DeleteMovieController {
    constructor() {}

    delete(req, res) {
        const { id } = req.params

        const result = DeleteMovieService.delete(id)

        if (!result.succeed) {
            return res.status(400).json(result.message)
        }

        return res.status(200).json(result.message)
    }
}

export default DeleteMovieController;