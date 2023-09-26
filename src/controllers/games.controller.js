const { findVideoGameByName } = require("../services/games.service");

/**
 * Retrieves a video game by its name from the database.
 * @async
 * @function getGameByName
 * @param {Object} req - The request object.
 * @param {Object} res - The response object.
 * @returns {Object} - The response object with the game data or an error message.
 */
const getGameByName = async (req, res) => {
    const gameName = req.query.name;
    if (typeof gameName !== 'string' || gameName.trim() === '') {
        res.status(400).json({ error: "Invalid game name" });
        return;
    }
    try {
        const game = await findVideoGameByName(gameName);
        if (game) {
            res.status(200).json({ game });
        } else {
            res.status(404).json({ error: "El juego no existe" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al buscar el juego por nombre", details: error.message });
    }
};

module.exports = {
    getGameByName,
}
