const videoGames = require("../utils/load-games");
const { getRandomGames } = require("../utils/random");

/**
 * Retrieves a random selection of video games based on the console parameter from the request URL.
 * If the console parameter exists in the videoGames object, it sends a JSON response with the random selection of games.
 * If the console parameter does not exist in the videoGames object, it sends a JSON response with an error message indicating that the console was not found.
 * 
 * @param {object} req - The request object containing information about the HTTP request.
 * @param {object} res - The response object used to send the HTTP response.
 */
const getRecommendationConsole = async (req, res) => {
    const consoleValue = req.params.console;
    (consoleValue in videoGames) 
        ? res.status(200).json(getRandomGames(videoGames[consoleValue]))
        : res.status(400).json({ error: 'Console not found' });
}


const getRecommendationWithGenre = async (req, res) => {
    res.status(200).json()
}


module.exports = {
    getRecommendationConsole,
    getRecommendationWithGenre
}