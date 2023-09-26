const { getRandomByGenre } = require("../services/suggest_random_game");
const { allVideoGames } = require("../utils/load-games");
const getRandomGamesFromGenre = async (req, res) => {
    const genre = req.body.genre_name;
    const games = await getRandomByGenre(allVideoGames,genre,3);
    return res.status(200).json({response : games});
}

module.exports = {
    getRandomGamesFromGenre
}