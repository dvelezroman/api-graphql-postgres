const Sequelize = require('sequelize');
const db = require('../service/db');

const Config = db.define('config', {
	mailserver: {
		type: Sequelize.STRING
	},
	mailuser: {
		type: Sequelize.STRING
	},
	mailpassword: {
		type: Sequelize.STRING
	},
	mailport: {
		type: Sequelize.STRING
	},
	welcome: {
		type: Sequelize.BOOLEAN
	},
	birthday: {
		type: Sequelize.BOOLEAN
	},
	renewal: {
		type: Sequelize.BOOLEAN
	}
});

module.exports = Config;
