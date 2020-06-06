const Sequelize = require('sequelize');
const envs = require('../envs')();
const fs = require('fs');

let db = null;

if (envs.ENVIRONMENT === 'production') {
	db = new Sequelize(envs.DB_NAME, envs.DB_USERNAME, envs.DB_PASSWORD, {
		host: envs.DB_HOSTNAME,
		logging: false,
		dialect: 'postgres',
		dialectOptions: {
			ssl: {
				ca: fs.readFileSync(__dirname + '/certs/ca-certificate.crt')
			}
		},
		port: envs.DB_PORT
	});
} else {
	db = new Sequelize(envs.DB_NAME, envs.DB_USERNAME, envs.DB_PASSWORD, {
		host: envs.DB_HOSTNAME,
		logging: false,
		dialect: 'postgres',
		port: envs.DB_PORT
	});
}

module.exports = db;
