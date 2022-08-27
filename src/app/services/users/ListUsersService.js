import UsersModel from "../../models/users/UsersModel"

class ListUsersService {
    constructor() {}

    listAll() {
        const user1 = new UsersModel(
            "a07b45c4-23aa-4e73-a7bb-cfdd9b3987c6",
            "Jackson de Oliveira Pereira",
            "jaxolv",
            "Odeio jumpscare & gosto de plot twists. Fico indeciso quando me deparo com um plot twist num jumpscare.",
            "jaxolv@gmail.com",
            26,
            'BRA'
        )

        const user2 = new UsersModel(
            "9c1fcbc5-2da8-4fd5-a521-5df516b6499e",
            "Iolanda Alves de Oliveira",
            "iolyalv",
            "Só gosto de filme que passa na Globo.",
            "iolyalv@gmail.com",
            64,
            'BRA'
        )
    }
}

export default ListUsersService;