const graphql = require('graphql');
const { getUser } = require('./auth/userResolver');
const { getClients } = require('./client/clientResolver');

const QueryRoot = new graphql.GraphQLObjectType({
	name: 'Query',
	fields: () => ({
		user: getUser,
		clients: getClients
	})
});

module.exports = QueryRoot;
