const UsersModel = require('../../models/users/UsersModel')

const CreateUserService = {
    create: (
        id,
        name,
        username,
        biography,
        email,
        password,
        age,
        country
    ) => {
        const user = new UsersModel(
            id,
            name,
            username,
            biography,
            email,
            password,
            age,
            country
        )

        return { succeed: true, message: user }
    }
}

module.exports = CreateUserService