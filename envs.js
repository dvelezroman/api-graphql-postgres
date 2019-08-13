const node_env = process.env.NODE_ENV || 'development';

const envs = () => {
	if (node_env === 'development') {
		return {
			SERVERURL: 'http://localhost:3001/',
			PORT: 3000,
			JWT_SECRET: 'caffeinasw'
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
