import { Sequelize } from "sequelize";

import UsersModel from "../app/models/users/UsersModel"

import databaseConfig from "../config/database"

const models = [UsersModel];

export default class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map((model) => model.init(this.connection))
    }
}