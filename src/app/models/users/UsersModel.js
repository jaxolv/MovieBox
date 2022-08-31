import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig)

class UsersModel extends Model {}

UsersModel.init(
    {
        id: {
            type: Sequelize.UUIDV4(),
            primaryKey: true
        },
        name: Sequelize.STRING,
        username: Sequelize.STRING,
        biography: Sequelize.INTEGER,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        age: Sequelize.INTEGER,
        country: Sequelize.STRING,
    },
    {
        sequelize,
        modelName: "users",
        timestamps: true
    }
)

export default UsersModel;