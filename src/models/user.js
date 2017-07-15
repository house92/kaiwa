import Sequelize from "sequelize";
const sequelize = new Sequelize("kaiwa_development", "root", "", {dialect: "postgresql"});

const User = sequelize.define("user", {
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    firstName: {
        type: Sequelize.STRING,
        notEmpty: true
    },
    lastName: {
        type: Sequelize.STRING,
        notEmpty: true
    },
    username: {
        type: Sequelize.TEXT
    },
    about: {
        type: Sequelize.TEXT
    },
    email: {
        type: Sequelize.STRING,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastLogin: {
        type: Sequelize.DATE
    },
    status: {
        type: Sequelize.ENUM("active", "inactive"),
        defaultValue: "active"
    }
});

export default User;
