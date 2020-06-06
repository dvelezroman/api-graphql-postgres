const Sequelize = require('sequelize');
const db = require('../service/db');

const Client = db.define('client', {
	type: {
		type: Sequelize.STRING
	},
	document: {
		type: Sequelize.STRING,
		unique: {
			args: true,
			msg: 'Document already registered'
		}
	},
	name: {
		type: Sequelize.STRING
	},
	address: {
		type: Sequelize.STRING
	},
	province: {
		type: Sequelize.STRING
	},
	city: {
		type: Sequelize.STRING
	},
	status: {
		type: Sequelize.BOOLEAN
	}
});

module.exports = Client;
