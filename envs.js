const node_env = process.env.NODE_ENV || 'development';

const envs = () => {
	if (node_env === 'development') {
		return {
			SERVERURL: 'http://localhost:3000/',
			PORT: 3000,
			JWT_SECRET: 'caffeinasw',
			DB_NAME: 'seguros',
			DB_USERNAME: 'postgres',
			DB_PASSWORD: 'postgres2019',
			DB_HOSTNAME: '127.0.0.1'
		};
	} else {
		return {
			SERVERURL: 'https://app.arsys.es/',
			PORT: 5000,
			JWT_SECRET: 'caffeinasw'
		};
	}
};

module.exports = envs;
