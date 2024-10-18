const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  abbreviation: {
    type: String,
    required: true
  },
  logoUrl: {
    type: String,
    required: false
  },
  color: {
    type: String, // Assuming it's a hex code or a valid CSS color string
    required: true // Mark it as required if every team must have a color
  }
});

const Team = mongoose.model('Team', teamSchema);

module.exports = Team;
