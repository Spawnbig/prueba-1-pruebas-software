const videoGames = require("../utils/load-games");


const findVideoGameByName = async (gameName) => {
    const modifyName = deleteQuotationMarks(gameName);
    const gamesList = Object.values(videoGames).flatMap(gamesForConsole => gamesForConsole);
    return gamesList.find(game => game.name.toUpperCase() === modifyName.toUpperCase());
}

function deleteQuotationMarks(text) {
    const textWithOutQuotations = text.replace(/"/g, "");
    return textWithOutQuotations;
}

module.exports = {
    findVideoGameByName,
}
