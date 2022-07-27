const { v4 } = require('uuid')
const CreateUserService = require('../../services/users/CreateUserService')

const controller = {
    create: (req, res) => {
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

module.exports = controller