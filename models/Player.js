const Sequelize = require('sequelize');
const db = require('../service/db');

const Player = db.define('player', {
	first_name: {
		type: Sequelize.STRING
	},
	last_name: {
		type: Sequelize.STRING
	},
	email: {
		type: Sequelize.STRING
	},
	password: {
		type: Sequelize.STRING
	}
});

module.exports = Player;
