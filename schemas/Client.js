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
		}
	})
});

Client._typeConfig = {
	sqlTable: 'clients',
	uniqueKey: 'id'
};

module.exports = Client;
