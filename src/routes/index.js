const { getRecommendationConsole, getRecommendationWithGenre } = require("../controllers/consoles.controller");
const { getRandomGamesFromGenre } = require("../controllers/genre.controller");
const { CONSOLES_PREFIX, GENRES_PREFIX } = require("../utils/constants");

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
}

module.exports = setupRoutes;