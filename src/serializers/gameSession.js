const {calculateLivesLeft} = require("../services/gameSession")
const serializeGameSession = async(gameSession) => {
    const gameSessionWord = await gameSession.getWord();
    const actualWord = gameSessionWord.title;
    const playedLetters = gameSession.playedLetters;
    console.log(actualWord, playedLetters);

    const playedLettersSet = new Set([...playedLetters])

    const maskedWord = [...actualWord]
    .map(letter => playedLettersSet.has(letter) ? letter : "_")

    return {
        id: gameSession.id,
        livesLeft: calculateLivesLeft(actualWord, playedLetters),
        result: !!gameSession.endedAt,
        maskedWord
    }
}

module.exports = serializeGameSession;