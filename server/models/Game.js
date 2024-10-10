const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    date: { type: String, required: true },
    games: [{
        homeTeam: { type: String, required: true },
        homeAlias: { type: String, required: true },
        awayTeam: { type: String, required: true },
        awayAlias: { type: String, required: true },
        timeUS: { type: String, required: true },
        imageURL: { type: String, required: true },
        imageLogoHome: { type: String, required: true },
        imageLogoAway: { type: String, required: true },
        homeColor: { type: String, required: true },
        awayColor: { type: String, required: true },
        channel: { type: String, required: true },
        available: { type: Boolean, required: true }
    }]
});

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;
