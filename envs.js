// eslint-disable-next-line no-undef
const node_env = process.env.NODE_ENV || 'production';

const envs = () => {
	if (node_env === 'development') {
		return {
			ENVIRONMENT: 'development',
			SERVERURL: 'http://localhost/',
			PORT: 3001,
			JWT_SECRET: 'caffeinasw',
			DB_NAME: 'my_crm_db',
			DB_USERNAME: 'root',
			DB_PASSWORD: 'root2021',
			DB_HOSTNAME: '127.0.0.1',
			DB_PORT: 3306,
			// sslmode: require,
		};
	} else {
		return {
			ENVIRONMENT: 'production',
			SERVERURL: 'http://localhost/',
			PORT: 8443,
			JWT_SECRET: 'caffeinasw',
			DB_NAME: 'my_crm_db',
			DB_USERNAME: 'dvelez',
			DB_PASSWORD: 'dvelez2021',
			DB_HOSTNAME: '127.0.0.1',
			DB_PORT: 3306,
			// sslmode: require,
		};
	}
};

module.exports = envs;
