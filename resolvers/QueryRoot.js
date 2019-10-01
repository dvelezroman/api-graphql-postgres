const graphql = require('graphql');
const { getUser } = require('./auth/userResolver');
const { getClients, getClient } = require('./client/clientResolver');
const { getCompany, getCompanies } = require('./company/companyResolver');
const { getPeople, getPerson } = require('./people/peopleResolver');
const { getTypes, getType } = require('./type/typeResolver');
const { getInsurance, getInsurances } = require('./insurance/insuranceResolver');

const QueryRoot = new graphql.GraphQLObjectType({
	name: 'Query',
	description: 'Querys for get information from schemas',
	fields: () => ({
		user: getUser,
		clients: getClients,
		client: getClient,
		company: getCompany,
		companies: getCompanies,
		people: getPeople,
		person: getPerson,
		type: getType,
		types: getTypes,
		insurances: getInsurances,
		insurance: getInsurance
	})
});

module.exports = QueryRoot;
