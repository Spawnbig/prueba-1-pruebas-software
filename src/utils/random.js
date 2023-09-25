/**
 * Returns a random selection of two games from the input array.
 *
 * @param {Array} games - An array of games. (Provided by JSON file)
 * @returns {Array} - An array containing two randomly selected games from the input array.
 */
function getRandomGames(games) {
    return games.sort(() => 0.5 - Math.random()).slice(0, 2);
}


module.exports = {
    getRandomGames
}