/**
 * Shuffles an array of game objects and returns an array of randomly selected game names.
 * 
 * @param {Array} games - An array of game objects.
 * @param {number} numberOfGames - The number of games to select.
 * @returns {Array} - An array of the names of the randomly selected games.
 */
function getRandomGames(games, numberOfGames) {
    const sortedGames = games.slice().sort(() => 0.5 - Math.random());
    return sortedGames.slice(0, numberOfGames).map(({name}) => name);
}

module.exports = {
    getRandomGames
}