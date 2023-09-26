const { getRandomByGenre } = require("../services/suggest_random_game");
const { allVideoGames } = require("../utils/load-games");
/**
 * Retrieves a random selection of games from the specified genre.
 * 
 * @param {Object} req - The request object containing the genre name in the `body` property.
 * @param {Object} res - The response object used to send the JSON response.
 * @returns {Object} - A JSON response containing an array of randomly selected games based on the specified genre.
 */
const getRandomGamesFromGenre = async (req, res) => {
    const genre = req.body.genre_name;
    const games = await getRandomByGenre(allVideoGames, genre, 3);
    return res.status(200).json({ response: games });
}

module.exports = {
    getRandomGamesFromGenre
}