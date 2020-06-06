const graphql = require('graphql');

const User = new graphql.GraphQLObjectType({
	name: 'User',
	fields: () => ({
		id: {
			type: graphql.GraphQLInt
		},
		document: {
			type: graphql.GraphQLString
		},
		username: {
			type: graphql.GraphQLString
		},
		role: {
			type: graphql.GraphQLString
		},
		first_name: {
			type: graphql.GraphQLString
		},
		last_name: {
			type: graphql.GraphQLString
		},
		email: {
			type: graphql.GraphQLString
		},
		password: {
			type: graphql.GraphQLString
		}
	})
});

User._typeConfig = {
	sqlTable: 'users',
	uniqueKey: 'id'
};

module.exports = User;
