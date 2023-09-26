function getRandomGames(games, numberOfGames) {
    const sortedGames = games.slice().sort(() => 0.5 - Math.random());
    return sortedGames.slice(0, numberOfGames).map(({name}) => name);
}

module.exports = {
    getRandomGames
}