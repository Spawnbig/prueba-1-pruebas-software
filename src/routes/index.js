const { getRecommendationConsole, getRecommendationWithGenre} = require("../controllers/consoles.controller");
const { getGameByName } = require("../controllers/games.controller");
const { getRandomGamesFromGenre } = require("../controllers/genre.controller");
const { CONSOLES_PREFIX, GENRES_PREFIX, GAMES_PREFIX } = require("../utils/constants");

/**
 * Sets up the routes for handling HTTP requests in the APP.
 * 
 * @param {Object} app - An instance of the Express.js application.
 * @returns {void} - Once complete it returns nothing.
 */
const setupRoutes = (app) => {
    app.use(CONSOLES_PREFIX + '/:console/random_games', getRecommendationConsole);
    app.post(CONSOLES_PREFIX + '/:console/genre/random_game', getRecommendationWithGenre);
    app.post(GENRES_PREFIX + '/random_games', getRandomGamesFromGenre);
    app.get(GAMES_PREFIX, getGameByName);
}

module.exports = setupRoutes;