const graphql = require('graphql');
const models = require('../../models');
const { Client, InputClient } = require('../../schemas/Client');

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
				msg: 'You are not authenticated!',
				clients: []
			};
		}
		const clients = await models.Client.findAll({ include: [{ all: true }] });
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
		const client = await models.Client.findOne({ where: { document } });
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
		id: { type: graphql.GraphQLInt },
		client: { type: InputClient }
	},
	resolve: async (parent, { client, id }, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated'
			};
		}
		const clientUpdated = await models.Client.update({ ...client }, { where: { id } });
		if (clientUpdated) {
			return {
				status: true,
				client: clientUpdated,
				msg: 'Client Created'
			};
		}
		return {
			status: false,
			client: null,
			msg: 'No Client Found'
		};
	}
};

const deleteClient = {
	type: new graphql.GraphQLObjectType({
		name: 'DeleteClient',
		description: 'Deletes a Client',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			msg: { type: graphql.GraphQLString }
		})
	}),
	args: {
		id: { type: graphql.GraphQLInt }
	},
	resolve: async (parent, { id }, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated'
			};
		}
		const clientDeleted = await models.Client.destroy({ where: { id } });
		if (clientDeleted) {
			return {
				status: true,
				msg: 'Client Deleted'
			};
		}
		return {
			status: false,
			msg: 'Client was not deleted'
		};
	}
};

module.exports = {
	getClients,
	getClient,
	newClient,
	updateClient,
	deleteClient
};
