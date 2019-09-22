const Sequelize = require('sequelize');
const db = require('../service/db');

const People = db.define('people', {
	document: {
		type: Sequelize.STRING
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
