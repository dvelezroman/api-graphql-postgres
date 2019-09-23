const graphql = require('graphql');
const { login, getUser } = require('./auth/userResolver');

const QueryRoot = new graphql.GraphQLObjectType({
	name: 'Query',
	fields: () => ({
		login: login,
		user: getUser
	})
});

module.exports = QueryRoot;
