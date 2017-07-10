import Sequelize from "sequelize";
const sequelize = new Sequelize("kaiwa_development", "root", "", {dialect: "postgresql"});
import Show from "./show";
import Genre from "./genre";

const ShowGenre = sequelize.define("show_genre", {
    showId: {
      type: Sequelize.INTEGER
    },
    genreId: {
      type: Sequelize.INTEGER
    }
});

Show.belongsToMany(Genre, {through: "show_genres", foreignKey: "showId"});
Genre.belongsToMany(Show, {through: "show_genres", foreignKey: "genreId"});

export default ShowGenre;
