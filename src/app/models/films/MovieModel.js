import Sequelize, { Model } from "sequelize";

export default class MovieModel extends Model {
    static init(sequelize) {
        super.init(
            {
                id: Sequelize.UUIDV4(),
                title: Sequelize.STRING,
                subtitle: Sequelize.STRING,
                year: Sequelize.INTEGER,
                country: Sequelize.STRING,
                duration: Sequelize.INTEGER,
                genre: Sequelize.STRING,
                imdb: Sequelize.FLOAT(3,1),
                rotten: {
                    tomatometer: Sequelize.INTEGER,
                    audience: Sequelize.INTEGER
                }
            },
            {
                sequelize
            }
        );
    }
}