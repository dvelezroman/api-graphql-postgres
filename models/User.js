const Sequelize = require('sequelize');
const db = require('../service/db');

const User = db.define('user', {
	document: {
		type: Sequelize.STRING,
		unique: {
			args: true,
			msg: 'Document already registered'
		}
	},
	first_name: {
		type: Sequelize.STRING
	},
	last_name: {
		type: Sequelize.STRING
	},
	username: {
		type: Sequelize.STRING,
		unique: {
			args: true,
			msg: 'Username already taken!'
		}
	},
	role: {
		type: Sequelize.ENUM(['admin', 'review'])
	},
	email: {
		type: Sequelize.STRING,
		unique: {
			args: true,
			msg: 'Email already taken!'
		}
	},
	password: {
		type: Sequelize.STRING
	}
});

module.exports = User;
