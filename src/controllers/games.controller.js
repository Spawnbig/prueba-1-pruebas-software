const { findVideoGameByName } = require("../services/games.service");


/**
 * Retrieves a video game by its name. The name needs to match exactly, but it is not case sensitive.
 * 
 * @param {Object} req - The request object representing the request made to the server. It should have a `query` property containing the name of the game to search for.
 * @param {Object} res - The response object representing the response to be sent back to the client.
 * @returns {Promise} - A promise that resolves to a JSON object with a `response` property containing the video console and genres of the game, separated by commas.
 * @throws {Error} - If the game is not found, it throws an error with the message "El juego no existe".
 */
const getGameByName = async (req, res) => {
    const game = findVideoGameByName(req.query.name);
    if (!game) return res.status(404).json({ error: "El juego no existe" });
    const response = `${game.video_console} - ${game.genres.join(", ")}`;
    res.status(200).json({ response });
};

module.exports = getGameByName;

module.exports = {
    getGameByName,
}
