const Sequelize = require('sequelize');
const db = require('../service/db');

const Insurance = db.define('insurance', {
	ref: {
		type: Sequelize.STRING
	},
	amount: {
		type: Sequelize.DECIMAL
	},
	premium: {
		type: Sequelize.DECIMAL
	},
	from: {
		type: Sequelize.DATE
	},
	term: {
		type: Sequelize.STRING
	}
});

module.exports = Insurance;
