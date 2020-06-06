const Sequelize = require('sequelize');
const db = require('../service/db');

const Office = db.define('office', {
	ruc: {
		type: Sequelize.STRING
	},
	name: {
		type: Sequelize.STRING,
		unique: {
			args: true,
			msg: 'Name already registered'
		}
	},
	address: {
		type: Sequelize.STRING
	},
	pathlogo: {
		type: Sequelize.STRING
	}
});

module.exports = Office;
