import Sequelize, { Model } from "sequelize";
import databaseConfig from "../../../config/database";

const sequelize = new Sequelize(databaseConfig)

class MovieModel extends Model {}

MovieModel.init(
    {
        id: {
            type: Sequelize.UUIDV4(),
            primaryKey: true
        },
        title: Sequelize.STRING,
        subtitle: Sequelize.STRING,
        year: Sequelize.INTEGER,
        country: Sequelize.STRING,
        duration: Sequelize.INTEGER,
        genre: Sequelize.STRING,
        imdb: Sequelize.FLOAT,
        rottenTomatometer: Sequelize.INTEGER,
        rottenAudience: Sequelize.INTEGER
    },
    {
        sequelize,
        modelName: "movies",
        timestamps: false
    }
)

export default MovieModel;