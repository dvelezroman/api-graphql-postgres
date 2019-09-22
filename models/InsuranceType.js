const Sequelize = require('sequelize');
const db = require('../service/db');

const InsuranceType = db.define('insurance_type', {
	name: {
		type: Sequelize.STRING
	},
	code: {
		type: Sequelize.STRING
	}
});

module.exports = InsuranceType;
