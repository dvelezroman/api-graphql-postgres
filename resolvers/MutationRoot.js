const graphql = require('graphql');
const { signUp, login } = require('./auth/userResolver');
const { newClient, updateClient, deleteClient } = require('./client/clientResolver');

const MutationRoot = new graphql.GraphQLObjectType({
	name: 'Mutation',
	fields: () => ({
		signup: signUp,
		login: login,
		newClient: newClient,
		updateClient: updateClient,
		deleteClient: deleteClient
	})
});

module.exports = MutationRoot;
