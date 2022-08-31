import { v4 } from "uuid";
import CreateUserService from '../../services/users/CreateUserService';

export default class CreateUserController {
    constructor() {
        this.service = new CreateUserService();
    }

    async create(req, res) {
        const {
            name,
            username,
            biography,
            email,
            password,
            age,
            country
        } = req.body

        const user = await this.service.create(
            v4(),
            name,
            username,
            biography,
            email,
            password,
            age,
            country
        )

        return res.status(200).json(user.message)
    }
}
