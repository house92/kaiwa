import Sequelize from "sequelize";
const sequelize = new Sequelize("kaiwa_development", "root", "", {dialect: "postgresql"});
// import Genre from "./genre";

const Show = sequelize.define("show", {
    name: Sequelize.STRING,
    description: Sequelize.TEXT
});

// Show.belongsToMany(Genre, {through: "ShowGenre"});

export default Show;
