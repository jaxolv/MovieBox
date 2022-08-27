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


/* function UsersModel(
    id,
    name,
    username,
    biography,
    email,
    password,
    age,
    country
) {
    this.id = id
    this.name = name
    this.username = username
    this.biography = biography
    this.email = email
    this.password = password
    this.age = age
    this.country = country
}

module.exports = UsersModel */