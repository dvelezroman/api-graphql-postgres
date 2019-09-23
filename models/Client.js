const Sequelize = require('sequelize');
const db = require('../service/db');

const Client = db.define('client', {
	type: {
		type: Sequelize.ENUM(['Natural', 'Juridica'])
	},
	document: {
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
	}
});

module.exports = Client;