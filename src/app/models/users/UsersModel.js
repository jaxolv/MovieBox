import Sequelize, { Model } from "sequelize";

export default class UsersModel extends Model {
    static init(sequelize) {
        super.init(
            {
                id: Sequelize.UUIDV4(),
                name: Sequelize.STRING,
                username: Sequelize.STRING,
                biography: Sequelize.INTEGER,
                email: Sequelize.STRING,
                password: Sequelize.STRING,
                age: Sequelize.INTEGER,
                country: Sequelize.STRING,
            },
            {
                sequelize
            }
        );
    }
}