const Sequelize = require('sequelize');
const db = require('../service/db');

const People = db.define('people', {
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
	email: {
		type: Sequelize.STRING
	},
	city: {
		type: Sequelize.STRING
	},
	province: {
		type: Sequelize.STRING
	},
	address: {
		type: Sequelize.STRING
	},
	birthday: {
		type: Sequelize.DATE
	}
});

module.exports = People;
