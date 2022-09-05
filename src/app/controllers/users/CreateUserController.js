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
            age,
            country,
            email
        } = req.body

        const user = await this.service.createUser(
            name,
            username,
            biography,
            age,
            country,
            email
        )
        
        return res.status(200).json(user)
    }
}
