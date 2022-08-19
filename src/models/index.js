const Sequelize = require("sequelize");
require('dotenv').config();
const env = process.env.NODE_ENV || 'development';
const config = require("../config/config");
console.log(config);
const sequelize = new Sequelize(config[env].database, config[env].username, config[env].password, config[env]);

module.exports = sequelize;