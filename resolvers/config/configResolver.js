const graphql = require('graphql');
const models = require('../../models');
const { Config, InputConfig } = require('../../schemas/Config');

const getConfigs = {
	description: 'Get all Configs',
	type: new graphql.GraphQLObjectType({
		name: 'GetConfigs',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			configs: { type: new graphql.GraphQLList(Config) },
			msg: { type: graphql.GraphQLString }
		})
	}),
	resolve: async (parent, args, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated!',
				Configs: []
			};
		}
		const configs = await models.Config.findAll();
		if (configs.length) {
			return {
				status: true,
				configs,
				msg: 'Okay'
			};
		} else {
			return {
				status: false,
				configs: [],
				msg: 'No Configs'
			};
		}
	}
};

const getConfig = {
	description: 'Gets a Config by his Id',
	type: new graphql.GraphQLObjectType({
		name: 'GetConfig',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			config: { type: Config },
			msg: { type: graphql.GraphQLString }
		})
	}),
	args: {
		id: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) }
	},
	resolve: async (parent, { id }, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated'
			};
		}
		const config = await models.Config.findOne({ where: { id } });
		if (client) {
			return {
				status: true,
				config,
				msg: 'Okay'
			};
		}
		return {
			status: false,
			config: null,
			msg: 'No Config Found'
		};
	}
};

const newConfig = {
	description: 'Creates a New Config',
	type: new graphql.GraphQLObjectType({
		name: 'NewConfig',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			config: { type: Config },
			msg: { type: graphql.GraphQLString }
		})
	}),
	args: {
		config: { type: InputConfig }
	},
	resolve: async (parent, { config }, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated'
			};
		}
		const configCreated = await models.Config.create(config);
		if (configCreated) {
			return {
				status: true,
				config: configCreated,
				msg: 'Config Created'
			};
		}
		return {
			status: false,
			config: null,
			msg: 'No Config Created'
		};
	}
};

const updateConfig = {
	description: 'Updates a Config',
	type: new graphql.GraphQLObjectType({
		name: 'UpdateConfig',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			config: { type: Config },
			msg: { type: graphql.GraphQLString }
		})
	}),
	args: {
		id: { type: graphql.GraphQLInt },
		config: { type: InputConfig }
	},
	resolve: async (parent, { config, id }, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated'
			};
		}
		const configUpdated = await models.Config.update({ ...config }, { where: { id } });
		if (configUpdated) {
			return {
				status: true,
				config: configUpdated,
				msg: 'Config Updated'
			};
		}
		return {
			status: false,
			config: null,
			msg: 'Config not Found'
		};
	}
};

const deleteConfig = {
	description: 'Deletes a Config',
	type: new graphql.GraphQLObjectType({
		name: 'DeleteConfig',
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
		const configDeleted = await models.Config.destroy({ where: { id } });
		if (configDeleted) {
			return {
				status: true,
				msg: 'Config Deleted'
			};
		}
		return {
			status: false,
			msg: 'Config was not deleted'
		};
	}
};

module.exports = {
	getConfigs,
	getConfig,
	newConfig,
	updateConfig,
	deleteConfig
};
