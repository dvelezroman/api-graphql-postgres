const node_env = process.env.NODE_ENV || 'production';
const port = process.env.PORT;

const envs = () => {
	if (node_env === 'development') {
		return {
			ENVIRONMENT: 'development',
			SERVERURL: 'http://localhost:3000/',
			PORT: 3000,
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
			PORT: 3000,
			JWT_SECRET: 'caffeinasw',
			DB_NAME: 'admin_my_crm',
			DB_USERNAME: 'my_crm',
			DB_PASSWORD: 'my_crm2020@',
			DB_HOSTNAME:
				'localhost',
			DB_PORT: 5432,
			sslmode: require,
		};
	}
};

module.exports = envs;
