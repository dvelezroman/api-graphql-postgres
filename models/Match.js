const Sequelize = require('sequelize');
const db = require('../service/db');

const Match = db.define('match', {
	date: {
		type: Sequelize.DATE,
		allowNull: false
  },
  result: {
    type: Sequelize.ENUM('homeTeamId', 'awayTeamId', 'tied')
  }
});

module.exports = Match;
