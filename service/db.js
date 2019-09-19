const Sequelize = require('sequelize');
const envs = require('../envs')();

const db = new Sequelize(envs.DB_NAME, envs.DB_USERNAME, envs.DB_PASSWORD, {
	host: envs.DB_HOSTNAME,
	logging: false,
	dialect: 'postgres'
});

module.exports = db;
