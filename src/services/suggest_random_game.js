const videoGames = require("../utils/load-games");



const get_games_by_console = async (console_abreviation) => {
    return await videoGames[console_abreviation];
}


const random_game = async (console_game, genre) => {
    const games = await get_games_by_console(console_game);
    gamesFiltered = [];
    console.log(games);
    games.forEach(game => {
        if(game.genres.includes(genre)){
            gamesFiltered.push(game);
        }
    });
    return gamesFiltered[Math.floor(Math.random() * gamesFiltered.length)];
}



module.exports = {
    random_game,
}
