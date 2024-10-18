// models/Game.js
const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  homeTeam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',  // Reference the Team model
    required: true
  },
  awayTeam: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',  // Reference the Team model
    required: true
  },
  score: {
    homeTeamScore: {
      type: Number,
      default: 0
    },
    awayTeamScore: {
      type: Number,
      default: 0
    }
  },
  available: {
    type: Boolean,
    default: true
  }
});

const Game = mongoose.model('Game', gameSchema);

module.exports = Game;
