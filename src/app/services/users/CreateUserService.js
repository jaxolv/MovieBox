import { v4 } from 'uuid';
import UsersModel from '../../models/users/UsersModel';

class CreateUserService {
    constructor() { }

    async createUser(
        name,
        username,
        biography,
        age,
        country,
        email
    ) {
        try {
            const newUser = await UsersModel.create({
                id: v4(),
                name,
                username,
                biography,
                age,
                country,
                email
            })

            console.log(newUser)
            return newUser;

        } catch (error) {
            return { error: error.message }
        }
    }
}

export default CreateUserService;