const graphql = require('graphql');

const Team = require('./Team');

const Player = new graphql.GraphQLObjectType({
	name: 'Player',
	fields: () => ({
		id: {
			type: graphql.GraphQLInt
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
		team: {
			type: Team
		}
	})
});

Player._typeConfig = {
	sqlTable: 'players',
	uniqueKey: 'id',
};

module.exports = Player;