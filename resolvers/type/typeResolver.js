const graphql = require('graphql');
const models = require('../../models');
const { Type, InputType } = require('../../schemas/Type');

const getTypes = {
	description: 'Get all Insurance Types',
	type: new graphql.GraphQLObjectType({
		name: 'GetTypes',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			types: { type: new graphql.GraphQLList(Type) },
			msg: { type: graphql.GraphQLString }
		})
	}),
	resolve: async (parent, args, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated!',
				types: []
			};
		}
		const types = await models.InsuranceType.findAll();
		if (types.length) {
			return {
				status: true,
				types,
				msg: 'Okay'
			};
		} else {
			return {
				status: false,
				types,
				msg: 'No Insurance Types found'
			};
		}
	}
};

const getType = {
	description: 'Gets a Insurance Type',
	type: new graphql.GraphQLObjectType({
		name: 'GetType',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			type: { type: Type },
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
		const type = await models.InsuranceType.findOne({ where: { id } });
		if (client) {
			return {
				status: true,
				type,
				msg: 'Okay'
			};
		}
		return {
			status: false,
			type,
			msg: 'No Insurance Type Found'
		};
	}
};

const newType = {
	description: 'Creates a New Type',
	type: new graphql.GraphQLObjectType({
		name: 'NewType',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			type: { type: Type },
			msg: { type: graphql.GraphQLString }
		})
	}),
	args: {
		type: { type: InputType }
	},
	resolve: async (parent, { type }, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated'
			};
		}
		const typeCreated = await models.InsuranceType.create(type);
		if (typeCreated) {
			console.log(typeCreated);
			return {
				status: true,
				type: typeCreated,
				msg: 'Insurance Type Created'
			};
		}
		return {
			status: false,
			type: null,
			msg: 'No Insurance type Found'
		};
	}
};

const updateType = {
	description: 'Updates a Type',
	type: new graphql.GraphQLObjectType({
		name: 'UpdateType',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			type: { type: Type },
			msg: { type: graphql.GraphQLString }
		})
	}),
	args: {
		id: { type: graphql.GraphQLInt },
		type: { type: InputType }
	},
	resolve: async (parent, { type, id }, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated'
			};
		}
		const typeUpdated = await models.InsuranceType.update(
			{ ...type },
			{ where: { id } }
		);
		if (typeUpdated) {
			return {
				status: true,
				type: typeUpdated,
				msg: 'Insurance Type Created'
			};
		}
		return {
			status: false,
			type: null,
			msg: 'Insurance Type not Found'
		};
	}
};

const deleteType = {
	description: 'Deletes an Insurance Type',
	type: new graphql.GraphQLObjectType({
		name: 'DeleteType',
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
		const typeDeleted = await models.InsuranceType.destroy({ where: { id } });
		if (typeDeleted) {
			return {
				status: true,
				msg: 'Insurance Type Deleted'
			};
		}
		return {
			status: false,
			msg: 'Insurance type was not deleted'
		};
	}
};

module.exports = {
	getTypes,
	getType,
	newType,
	updateType,
	deleteType
};
