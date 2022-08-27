import ListUsersService from "../../services/users/ListUsersService"

class ListAllUsersController {
    constructor() {}

    listAll(req, res) {
        const users = ListUsersService.listAll()

        return res.status(200).json(users)
    }
}

export default ListAllUsersController;