import Sequelize from "sequelize";
const sequelize = new Sequelize("kaiwa_development", "root", "", {dialect: "postgresql"});
// import Show from "./show";

const Genre = sequelize.define("genre", {
    name: Sequelize.STRING
});

// Genre.belongsToMany(Show, {through: "ShowGenre"});

export default Genre;
