import Sequelize from "sequelize";
const sequelize = new Sequelize("kaiwa_development", "root", "", {dialect: "postgresql"});

const Show = sequelize.define("show", {
    name: Sequelize.STRING,
    description: Sequelize.TEXT,
    image: Sequelize.STRING
});

Show.all = async () => {
    return await Show.findAll();
};

export default Show;
