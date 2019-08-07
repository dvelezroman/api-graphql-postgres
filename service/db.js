const Sequelize = require('sequelize');

const db = new Sequelize('league', 'puesto1', 'mentaleche2304', {
	logging: false,
	dialect: 'postgres'
});

module.exports = db;
