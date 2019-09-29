const graphql = require('graphql');

const Type = new graphql.GraphQLObjectType({
	name: 'Type',
	fields: () => ({
		id: {
			type: graphql.GraphQLInt
		},
		name: {
			type: graphql.GraphQLString
		},
		code: {
			type: graphql.GraphQLString
		}
	})
});

Type._typeConfig = {
	sqlTable: 'insurance_types',
	uniqueKey: 'id'
};

const InputType = new graphql.GraphQLInputObjectType({
	name: 'InputType',
	fields: () => ({
		name: {
			type: graphql.GraphQLString
		},
		code: {
			type: graphql.GraphQLString
		}
	})
});

InputType._typeConfig = {
	sqlTable: 'insurance_types',
	uniqueKey: 'id'
};

module.exports = {
	Type,
	InputType
};
