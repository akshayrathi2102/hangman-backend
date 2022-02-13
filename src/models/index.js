const Sequelize = require("sequelize");
const sequelize = new Sequelize('hangman', 'root', 'rootroot', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;