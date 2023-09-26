const videoGames = require("../utils/load-games");


/**
 * Finds a video game by its name.
 * @async
 * @function
 * @param {string} gameName - The name of the video game to find.
 * @returns {Object} - The video game object if found, otherwise undefined.
 */
const findVideoGameByName = async (gameName) => {
    const modifyName = deleteQuotationMarks(gameName);
    const gamesList = Object.values(videoGames).flatMap(gamesForConsole => gamesForConsole);
    return gamesList.find(game => game.name.toUpperCase() === modifyName.toUpperCase());
}

/**
 * Removes all quotation marks from a given text.
 *
 * @param {string} text - The text to remove quotation marks from.
 * @returns {string} The input text without any quotation marks.
 */
function deleteQuotationMarks(text) {
    const textWithOutQuotations = text.replace(/"/g, "");
    return textWithOutQuotations;
}

module.exports = {
    findVideoGameByName,
}
