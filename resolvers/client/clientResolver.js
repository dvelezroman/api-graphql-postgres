const graphql = require('graphql');
const models = require('../../models');
const Client = require('../../schemas/Client');
const JWT_SECRET = require('../../envs')()['JWT_SECRET']; // environment consts JWT_SECRET

const getClients = {
	type: new graphql.GraphQLObjectType({
		name: 'GetClient',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			clients: { type: new graphql.GraphQLList(Client) },
			msg: { type: graphql.GraphQLString }
		})
	}),
	resolve: async (parent, { username }, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated!'
			};
		}
		const clients = await models.Client.findAll();
		if (clients.length) {
			return {
				status: true,
				clients,
				msg: 'Okay'
			};
		} else {
			return {
				status: false,
				clients,
				msg: 'No Clients'
			};
		}
	}
};

module.exports = {
	getClients
};
