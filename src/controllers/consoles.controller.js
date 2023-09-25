const {random_game}= require("../services/suggest_random_game");

const getRecommendationConsole = async (req, res) => {
    res.status(200).json()
}

const getRecommendationWithGenre = async (req, res) => {
    const randomGame = await random_game(req.params.console, req.body.genre);
    res.status(200).json(randomGame);
}


module.exports = {
    getRecommendationConsole,
    getRecommendationWithGenre
}