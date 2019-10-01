const node_env = process.env.NODE_ENV || 'development';

const envs = () => {
	if (node_env === 'development') {
		return {
			SERVERURL: 'http://localhost:3000/',
			PORT: 3000,
			JWT_SECRET: 'caffeinasw',
			DB_NAME: 'seguros',
			DB_USERNAME: 'puesto1',
			DB_PASSWORD: 'mentaleche2304',
			DB_HOSTNAME: 'localhost'
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
