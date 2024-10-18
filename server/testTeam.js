// testTeam.js
const mongoose = require('mongoose');
const Team = require('./models/Team'); // Adjust path if needed

mongoose.connect('mongodb://localhost/NFLKL', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(async () => {
  console.log('MongoDB connected successfully');

  // Create a new team
  const newTeam = new Team({
    name: 'Team A',
    abbreviation: 'TMA',
    logoUrl: 'https://example.com/teamA-logo.png',
    color: '#FF0000',
  });

  await newTeam.save();
  console.log('Team saved:', newTeam);

  // Fetch all teams
  const teams = await Team.find();
  console.log('All teams:', teams);

  mongoose.connection.close();
})
.catch(err => console.log(err));
