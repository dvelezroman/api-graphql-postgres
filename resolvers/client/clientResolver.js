const graphql = require('graphql');
const models = require('../../models');
const { Client, InputClient } = require('../../schemas/Client');
const JWT_SECRET = require('../../envs')()['JWT_SECRET']; // environment consts JWT_SECRET

const getClients = {
	type: new graphql.GraphQLObjectType({
		name: 'GetClients',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			clients: { type: new graphql.GraphQLList(Client) },
			msg: { type: graphql.GraphQLString }
		})
	}),
	resolve: async (parent, args, { loggedUser }, resolveInfo) => {
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

const getClient = {
	type: new graphql.GraphQLObjectType({
		name: 'GetClient',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			client: { type: Client },
			msg: { type: graphql.GraphQLString }
		})
	}),
	args: {
		document: { type: graphql.GraphQLNonNull(graphql.GraphQLString) }
	},
	resolve: async (parent, { document }, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated'
			};
		}
		const client = await models.Client.find({ where: { document } });
		if (client) {
			return {
				status: true,
				client,
				msg: 'Okay'
			};
		}
		return {
			status: false,
			client,
			msg: 'No Client Found'
		};
	}
};

const newClient = {
	type: new graphql.GraphQLObjectType({
		name: 'NewClient',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			client: { type: Client },
			msg: { type: graphql.GraphQLString }
		})
	}),
	args: {
		client: { type: InputClient }
	},
	resolve: async (parent, { client }, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated'
			};
		}
		const clientCreated = await models.Client.create(client);
		if (clientCreated) {
			return {
				status: true,
				client: clientCreated,
				msg: 'Okay'
			};
		}
		return {
			status: false,
			client: null,
			msg: 'No Client Found'
		};
	}
};

const updateClient = {
	type: new graphql.GraphQLObjectType({
		name: 'UpdateClient',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			client: { type: Client },
			msg: { type: graphql.GraphQLString }
		})
	}),
	args: {
		document: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
		client: { type: InputClient }
	},
	resolve: async (
		parent,
		{ client, document },
		{ loggedUser },
		resolveInfo
	) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated'
			};
		}
		const clientUpdated = await models.Client.update(
			{ ...client },
			{ where: { document } }
		);
		if (clientUpdated) {
			return {
				status: true,
				client: clientUpdated,
				msg: 'Okay'
			};
		}
		return {
			status: false,
			client: null,
			msg: 'No Client Found'
		};
	}
};

module.exports = {
	getClients,
	getClient,
	newClient,
	updateClient
};
