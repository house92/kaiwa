import Sequelize from "sequelize";
const sequelize = new Sequelize("kaiwa_development", "root", "", {dialect: "postgresql"});

const Genre = sequelize.define("genre", {
    name: Sequelize.STRING
});

export default Genre;
