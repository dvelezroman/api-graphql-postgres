const Sequelize = require('sequelize');
const db = require('../service/db');

const Insurance = db.define('insurance', {
	ref: {
		type: Sequelize.STRING,
		unique: {
			args: true,
			msg: 'Ref already taken'
		}
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
	to: {
		type: Sequelize.DATE
	},
	term: {
		type: Sequelize.STRING
	},
	comment: {
		type: Sequelize.STRING
	}
});

module.exports = Insurance;
