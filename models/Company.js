const Sequelize = require('sequelize');
const db = require('../service/db');

const Company = db.define('company', {
	ref: {
		type: Sequelize.STRING
	},
	name: {
		type: Sequelize.STRING
	}
});

module.exports = Company;
