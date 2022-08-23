const { calculateLivesLeft } = require("../services/gameSession")
const serializeGameSession = async (gameSession) => {
  const name = gameSession.playerName;
  const gameSessionWord = await gameSession.getWord();
  var actualWord = gameSessionWord.title;
  const playedLetters = gameSession.playedLetters;
  console.log(actualWord, playedLetters);

  const playedLettersSet = new Set([...playedLetters])

  const maskedWord = [...actualWord]
    .map(letter => playedLettersSet.has(letter) ? letter : "_")
  const livesLeft = calculateLivesLeft(actualWord, playedLetters);
  actualWord = !!gameSession.endedAt ? actualWord : "";

  return {
    id: gameSession.id,
    name,
    livesLeft,
    result: !!gameSession.endedAt,
    maskedWord,
    playedLetters,
    actualWord
  }
}

module.exports = serializeGameSession;