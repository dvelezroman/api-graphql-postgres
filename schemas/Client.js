const graphql = require('graphql');

const Client = new graphql.GraphQLObjectType({
	name: 'Client',
	fields: () => ({
		id: {
			type: graphql.GraphQLInt
		},
		type: {
			type: graphql.GraphQLString
		},
		name: {
			type: graphql.GraphQLString
		},
		document: {
			type: graphql.GraphQLString
		},
		address: {
			type: graphql.GraphQLString
		},
		province: {
			type: graphql.GraphQLString
		},
		city: {
			type: graphql.GraphQLString
		},
		status: {
			type: graphql.GraphQLBoolean
		}
	})
});

Client._typeConfig = {
	sqlTable: 'clients',
	uniqueKey: 'id'
};

const InputClient = new graphql.GraphQLInputObjectType({
	name: 'InputClient',
	fields: () => ({
		type: {
			type: graphql.GraphQLString
		},
		document: {
			type: graphql.GraphQLString
		},
		name: {
			type: graphql.GraphQLString
		},
		address: {
			type: graphql.GraphQLString
		},
		province: {
			type: graphql.GraphQLString
		},
		city: {
			type: graphql.GraphQLString
		},
		status: {
			type: graphql.GraphQLBoolean
		}
	})
});

InputClient._typeConfig = {
	sqlTable: 'clients',
	uniqueKey: 'id'
};

module.exports = {
	Client,
	InputClient
};
