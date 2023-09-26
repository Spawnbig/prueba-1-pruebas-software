const videoGames = require("../utils/load-games");
const { getRandomGames } = require("../utils/random");

const getRandomByGenre = async (games,genre,limit) => {
    const gamesFiltered = games.filter(game => game.genres.some(genreGame => genreGame.toLowerCase() === genre.toLowerCase()));
    return getRandomGames(gamesFiltered, limit);
}

module.exports = {
    getRandomByGenre
}
