const Sequelize = require('sequelize');
const db = require('../service/db');

const User = db.define('user', {
	document: {
		type: Sequelize.STRING
	},
	first_name: {
		type: Sequelize.STRING
	},
	last_name: {
		type: Sequelize.STRING
	},
	username: {
		type: Sequelize.STRING
	},
	role: {
		type: Sequelize.ENUM(['admin', 'review'])
	},
	email: {
		type: Sequelize.STRING
	},
	password: {
		type: Sequelize.STRING
	}
});

module.exports = User;
