// api.test.mjs
import chai from 'chai';
import chaiHttp from 'chai-http'; // Import chai-http
import app from '../../server.js';

const { expect } = chai;

// Use chai.use to add chai-http plugin
chai.use(chaiHttp);

describe('API', () => {
  describe('GET /api/games', () => {
    it('should return a list of NFL games', (done) => {
      chai.request(app)
        .get('/api/games')
        .end((err, res) => {
          expect(res).to.have.status(200);
          expect(res.body).to.be.an('object');
          expect(res.body).to.have.property('games').that.is.an('array');
          expect(res.body.games).to.have.lengthOf.at.least(1);
          expect(res.body.games[0]).to.be.an('object');
          done();
        });
    });
  });
});
