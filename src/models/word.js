const { Model, DataTypes } = require("sequelize");
const sequelize = require("./index")

class Word extends Model { }
Word.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: DataTypes.STRING
}, { sequelize, modelName: 'words', timestamps: false});

module.exports = Word;