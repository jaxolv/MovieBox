import { v4 } from 'uuid';
import UsersModel from '../../models/users/UsersModel';

class CreateUserService {
    constructor() { }

    async create(
        id,
        name,
        username,
        biography,
        email,
        password,
        age,
        country
    ) {
        try {
            const newUser = await UsersModel.create({
                id: v4(),
                name,
                username,
                biography,
                email,
                password,
                age,
                country
            })

            return newUser;

        } catch (error) {
            return { error: error.message }
        }
    }
}

export default CreateUserService;