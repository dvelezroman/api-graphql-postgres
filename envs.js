const node_env = process.env.NODE_ENV || 'development';
const port = process.env.PORT || 3000;

const envs = () => {
	if (node_env === 'development') {
		return {
			ENVIRONMENT: 'development',
			SERVERURL: 'http://localhost:3000/',
			PORT: port,
			JWT_SECRET: 'caffeinasw',
			DB_NAME: 'seguros',
			DB_USERNAME: 'postgres',
			DB_PASSWORD: 'postgres2019',
			DB_HOSTNAME: '127.0.0.1',
			DB_PORT: 5432,
		};
	} else {
		return {
			ENVIRONMENT: 'production',
			SERVERURL: 'http://localhost/',
			PORT: port,
			JWT_SECRET: 'caffeinasw',
			DB_NAME: 'seguros',
			DB_USERNAME: 'doadmin',
			DB_PASSWORD: 'i9wo9refuagzdbud',
			DB_HOSTNAME:
				'db-postgresql-nyc1-68324-do-user-6604645-0.db.ondigitalocean.com',
			DB_PORT: 25060,
			sslmode: require,
		};
	}
};

module.exports = envs;
