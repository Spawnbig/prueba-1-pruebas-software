const { getRandomByGenre } = require("../services/suggest_random_game");
const videoGames = require("../utils/load-games");
const { getRandomGames } = require("../utils/random");


const getRecommendationConsole = async (req, res) => {
    const consoleValue = req.params.console;
    (consoleValue in videoGames)
        ? res.status(200).json({ response: getRandomGames(videoGames[consoleValue], 2) })
        : res.status(400).json({ error: 'Console not found' });
}

const getRecommendationWithGenre = async (req, res) => {
    const consoleValue = req.params.console;
    (consoleValue in videoGames)
        ? res.status(200).json({ response: await getRandomByGenre(videoGames[consoleValue], req.body.genre_name, 1) })
        : res.status(400).json({ error: 'Console not found' });
}



module.exports = {
    getRecommendationConsole,
    getRecommendationWithGenre,
}