const graphql = require('graphql');
const { getUser } = require('./auth/userResolver');

const QueryRoot = new graphql.GraphQLObjectType({
	name: 'Query',
	fields: () => ({
		user: getUser
	})
});

module.exports = QueryRoot;
