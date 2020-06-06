const graphql = require('graphql');

const Config = new graphql.GraphQLObjectType({
	name: 'Config',
	fields: () => ({
		id: {
			type: graphql.GraphQLInt
		},
		mailserver: {
			type: graphql.GraphQLString
		},
		mailuser: {
			type: graphql.GraphQLString
		},
		mailpassword: {
			type: graphql.GraphQLString
		},
		mailport: {
			type: graphql.GraphQLString
		},
		welcome: {
			type: graphql.GraphQLBoolean
		},
		birthday: {
			type: graphql.GraphQLBoolean
		},
		renewal: {
			type: graphql.GraphQLBoolean
		}
	})
});

Config._typeConfig = {
	sqlTable: 'configs',
	uniqueKey: 'id'
};

const InputConfig = new graphql.GraphQLInputObjectType({
	name: 'InputConfig',
	fields: () => ({
		mailserver: {
			type: graphql.GraphQLString
		},
		mailuser: {
			type: graphql.GraphQLString
		},
		mailpassword: {
			type: graphql.GraphQLString
		},
		mailport: {
			type: graphql.GraphQLString
		},
		welcome: {
			type: graphql.GraphQLBoolean
		},
		birthday: {
			type: graphql.GraphQLBoolean
		},
		renewal: {
			type: graphql.GraphQLBoolean
		}
	})
});

InputConfig._typeConfig = {
	sqlTable: 'configs',
	uniqueKey: 'id'
};

module.exports = {
	Config,
	InputConfig
};
