const graphql = require('graphql');

const Team = new graphql.GraphQLObjectType({
	name: 'Team',
	fields: () => ({
		id: { type: graphql.GraphQLInt },
		name: { type: graphql.GraphQLString }
	})
});

Team._typeConfig = {
	sqlTable: 'teams',
	uniqueKey: 'id'
};

module.exports = Team;