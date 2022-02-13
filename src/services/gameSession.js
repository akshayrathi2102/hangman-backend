const MAX_LIVES = 6;

const calculateLivesLeft = (actualWord, playedLetters) => {
    const actualWordArray = actualWord.split("");
    const playedLettersArray = playedLetters.split("");
    const actualWordSet = new Set([...actualWordArray]);

    const wrongLetters = playedLettersArray.filter((letter) => {
        return !actualWordSet.has(letter);
    })
    const lives = MAX_LIVES - wrongLetters.length;
    return lives;
}

const hasWon = (actualWord, playedLetters) => {
    const actualWordArray = actualWord.split("");
    const playedLettersArray = playedLetters.split("");
    const playedLettersSet = new Set([...playedLettersArray])

    const isWon = actualWordArray.reduce((acc, curr) => {
        if (!playedLettersSet.has(curr)) return false;
        return acc;
    }, true)

    return isWon;
}

const markGameCompleted = async(gameSession) => {
    const gameSessionWord = await gameSession.getWord();
    const actualWord = gameSessionWord.title;
    const playedLetters = gameSession.playedLetters;

    const lives = calculateLivesLeft(actualWord, playedLetters);
    const won = hasWon(actualWord, playedLetters);

    if(lives == 0 || won) {
        gameSession.endedAt = new Date();
        await gameSession.save()
    }
}

const playWordInGameSession = async(gameSession, letter) => {
    const playedLetters = gameSession.playedLetters.split("");
    const playedLettersSet = new Set([...playedLetters]);

    if(playedLettersSet.has(letter)) return;

    playedLetters.push(letter);
    gameSession.playedLetters = playedLetters.join("");
    await gameSession.save();

    await markGameCompleted(gameSession);
}

module.exports = {
    calculateLivesLeft,
    hasWon,
    markGameCompleted,
    playWordInGameSession
}