const { getRandomByGenre } = require("../services/suggest_random_game");
const videoGames = require("../utils/load-games");
const { getRandomGames } = require("../utils/random");


/**
 * Retrieves a subset of randomly selected games from a specific console in the videoGames object.
 * If the console is not found, it sends an error message.
 * 
 * @param {object} req - The request object containing the 'console' parameter.
 * @param {object} res - The response object used to send the JSON response.
 * @returns {void}
 */
const getRecommendationConsole = async (req, res) => {
    const consoleValue = req.params.console;
    (consoleValue in videoGames)
        ? res.status(200).json({ response: getRandomGames(videoGames[consoleValue], 2) })
        : res.status(400).json({ error: 'Console not found' });
}

/**
 * Retrieves a random game recommendation based on a specific genre and console.
 * 
 * @param {Object} req - The request object containing the console value and genre name in the parameters.
 * @param {Object} res - The response object used to send the JSON response.
 * @returns {Object} - If the console value exists, a JSON response with the recommended game. If the console value does not exist, 
 * a JSON response with an error message indicating that the console was not found.
 */
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