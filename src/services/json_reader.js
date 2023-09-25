const videoGames = require("../utils/load-games");

const showVideoGamesByConsole = (consoleName) => {
    console.log(`Showing games for ${consoleName}`);
    console.log(videoGames[consoleName]);
}

module.exports ={
    showVideoGamesByConsole
}