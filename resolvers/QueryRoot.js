const graphql = require('graphql');
const { getUser } = require('./auth/userResolver');
const { getClients, getClient } = require('./client/clientResolver');
const { getCompany, getCompanies } = require('./company/companyResolver');

const QueryRoot = new graphql.GraphQLObjectType({
	name: 'Query',
	description: 'Querys for get information from schemas',
	fields: () => ({
		user: getUser,
		clients: getClients,
		client: getClient,
		company: getCompany,
		companies: getCompanies
	})
});

module.exports = QueryRoot;
