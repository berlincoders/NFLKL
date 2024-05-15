// to run the tests:
// npx mocha __test__/integration/api.test.js

// Dynamically import mocha's describe and it functions
const { describe, it } = require('mocha');
// Dynamically import chai
const chai = require('chai');

describe('API', () => {
  describe('GET /api/games', () => {
    it('should return a list of NFL games', async () => {
      // Use chai's expect
      const expect = chai.expect;

      // Require the function to be tested (if any) and the data from the API
      const seasonData = require('../../src/api/nfl_season_2024.json');

      // Use the imported seasonData in your tests
      const games = seasonData.games;

      // Assertions on the data
      expect(games).to.be.an('object'); // Assuming games is an object
      // Add more assertions as needed based on the structure of your data
    });
  });
});
