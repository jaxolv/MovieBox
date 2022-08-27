import jwt from "jsonwebtoken";
import ListUsersService from "../../services/users/ListUsersService";

export default class SessionController {
    constructor() {}

    static create(request, response) {
        const {username, password} = request.body;

        const service = new ListUsersService();
        const user = service.listAll(username, password);

        if (!user) {
            return response.status(401).json({
                error: "User not found."
            });
        }

        const { id, name } = user;

        return response.json({
            user: {
                id,
                name,
                username
            },
            token: jwt.sign({ id },
            "a07bda8fd5e39462b4c3d860a36f6b4d", {
                expiresIn: "5d"
            })
        });
    }
}