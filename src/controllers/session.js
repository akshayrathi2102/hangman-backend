const Word = require("../models/word");
const GameSession = require("../models/gameSession")
const serializeGameSession = require("../serializers/gameSession")
const gameSessionService = require("../services/gameSession")

const createSession = async (req, res) => {
  const name = req.body.name;
  const word = await Word.findOne();

  const gameSession = await GameSession.create({
    playerName: name,
    playedLetters: "",
    startedAt: new Date(),
    wordId: word.id
  })
  res.status(200).send(await serializeGameSession(gameSession));
}

const playSession = async (req, res) => {
  const gameSession = await GameSession.findByPk(req.params.id);
  await gameSessionService.playWordInGameSession(gameSession, req.body.letter);
  res.send(await serializeGameSession(gameSession));
}

module.exports = {
  createSession,
  playSession
}