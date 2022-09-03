import DeleteMovieService from "../../services/films/DeleteMovieService"

class DeleteMovieController {
    constructor() {
        this.service = new DeleteMovieService();
    }

    async delete(req, res) {
        const { id } = req.params;

        const resulte = await this.service.deleteById(id);

        res.send(resulte)
    }
}

export default DeleteMovieController;