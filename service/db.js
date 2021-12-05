const Sequelize = require('sequelize');
const envs = require('../envs')();

let db = null;

if (envs.ENVIRONMENT === 'production') {
	db = new Sequelize(envs.DB_NAME, envs.DB_USERNAME, envs.DB_PASSWORD, {
		host: envs.DB_HOSTNAME,
		logging: false,
		dialect: 'mariadb',
	});
} else {
	db = new Sequelize(envs.DB_NAME, envs.DB_USERNAME, envs.DB_PASSWORD, {
		host: envs.DB_HOSTNAME,
		logging: true,
		dialect: 'mysql',
	});
}

module.exports = db;
