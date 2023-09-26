const videoGames = require("../utils/load-games");
const { getRandomGames } = require("../utils/random");

/**
 * Filters an array of game objects by genre and returns a random selection of games.
 * 
 * @param {Array} games - An array of game objects, where each object has a `name` and `genres` property.
 * @param {string} genre - The genre to filter the games by.
 * @param {number} limit - The maximum number of random games to return.
 * @returns {Promise<Array>} - An array of game objects that match the specified genre, limited to the specified limit.
 */
const getRandomByGenre = async (games, genre, limit) => {
    const gamesFiltered = games.filter(game => game.genres.some(genreGame => genreGame.toLowerCase() === genre.toLowerCase()));
    return getRandomGames(gamesFiltered, limit);
}

module.exports = {
    getRandomByGenre
}
