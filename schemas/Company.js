const graphql = require('graphql');

const Company = new graphql.GraphQLObjectType({
	name: 'Company',
	fields: () => ({
		id: {
			type: graphql.GraphQLInt
		},
		ref: {
			type: graphql.GraphQLString
		},
		name: {
			type: graphql.GraphQLString
		}
	})
});

Company._typeConfig = {
	sqlTable: 'companies',
	uniqueKey: 'id'
};

const InputCompany = new graphql.GraphQLInputObjectType({
	name: 'InputCompany',
	fields: () => ({
		ref: {
			type: graphql.GraphQLString
		},
		name: {
			type: graphql.GraphQLString
		}
	})
});

InputCompany._typeConfig = {
	sqlTable: 'companies',
	uniqueKey: 'id'
};

module.exports = {
	Company,
	InputCompany
};
