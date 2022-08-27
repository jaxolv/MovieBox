import { v4 } from "uuid";
import CreateUserService from '../../services/users/CreateUserService';

class CreateUserController {
    create(req, res) {
        const {
            name,
            username,
            biography,
            email,
            password,
            age,
            country
        } = req.body

        const user = CreateUserService.create(
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

export default CreateUserController;