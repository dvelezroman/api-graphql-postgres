const graphql = require('graphql');
const { signUp, login } = require('./auth/userResolver');
const { newClient, updateClient, deleteClient } = require('./client/clientResolver');
const { newCompany, updateCompany, deleteCompany } = require('./company/companyResolver');
const { newPerson, updatePerson, deletePerson } = require('./people/peopleResolver');
const { newType, updateType, deleteType } = require('./type/typeResolver');
const { newInsurance, updateInsurance, deleteInsurance } = require('./insurance/insuranceResolver');
const { newConfig, updateConfig, deleteConfig } = require('./config/configResolver');

const MutationRoot = new graphql.GraphQLObjectType({
	name: 'Mutation',
	fields: () => ({
		signup: signUp,
		login: login,
		newClient: newClient,
		updateClient: updateClient,
		deleteClient: deleteClient,
		newCompany: newCompany,
		updateCompany: updateCompany,
		deleteCompany: deleteCompany,
		newPerson: newPerson,
		updatePerson: updatePerson,
		deletePerson: deletePerson,
		newType: newType,
		updateType: updateType,
		deleteType: deleteType,
		newInsurance: newInsurance,
		updateInsurance: updateInsurance,
		deleteInsurance: deleteInsurance,
		newConfig: newConfig,
		updateConfig: updateConfig,
		deleteConfig: deleteConfig
	})
});

module.exports = MutationRoot;
