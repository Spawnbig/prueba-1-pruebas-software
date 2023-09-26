const PS2 = require('../../data/PS2.json');
const GBA = require('../../data/GBA.json');
const N64 = require('../../data/N64.json');

const allVideoGames = [...PS2, ...GBA, ...N64];

const videoGames = {
  PS2,
  GBA,
  N64,
  allVideoGames,
};

module.exports = videoGames;
