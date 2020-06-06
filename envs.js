const node_env = process.env.NODE_ENV || 'development';

const envs = () => {
	if (node_env === 'development') {
		return {
			SERVERURL: 'http://localhost/',
			PORT: 3000,
			JWT_SECRET: 'caffeinasw',
		};
	} else {
		return {
			SERVERURL: 'https://app.arsys.es/',
			PORT: process.env.PORT,
			JWT_SECRET: 'caffeinasw',
		};
	}
};

module.exports = envs;
