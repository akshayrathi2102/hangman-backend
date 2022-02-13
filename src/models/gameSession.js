const { Model, DataTypes } = require("sequelize");

const sequelize = require("./index")
const Word = require("./word")

class GameSession extends Model { }
GameSession.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    playerName: DataTypes.STRING,
    playedLetters: DataTypes.STRING,
    startedAt: DataTypes.DATE,
    endedAt: DataTypes.DATE
}, { sequelize, modelName: 'game_sessions', timestamps: false });

GameSession.belongsTo(Word);

module.exports = GameSession;