const Sequelize = require('sequelize');
const db = require('../service/db');

const Team = db.define('team', {
	name: {
		type: Sequelize.STRING,
		allowNull: false
	}
});

module.exports = Team;
