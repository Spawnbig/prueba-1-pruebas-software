const { getRecommendationConsole, getRecommendationWithGenre } = require("../controllers/consoles.controller");
const { CONSOLES_PREFIX } = require("../utils/constants");

const setupRoutes = (app) => {
    app.use(CONSOLES_PREFIX+'/:console/random_games',getRecommendationConsole);
    app.use(CONSOLES_PREFIX+'/:console/:genre/random_game',getRecommendationWithGenre);
}

module.exports = setupRoutes;