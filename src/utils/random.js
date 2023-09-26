/**
 * Returns a random selection of two games from the input array.
 *
 * @param {Array} games - An array of games. (Provided by JSON file)
 * @returns {Array} - An array containing two randomly selected games from the input array.
 */
function getRandomGames(games) {
    const sortedGames = games.slice().sort(() => 0.5 - Math.random());
    return sortedGames.slice(0, 2).map(({name}) => name);
}


module.exports = {
    getRandomGames
}