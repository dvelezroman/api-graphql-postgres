const graphql = require('graphql');

const models = require('../models');
const Player = require('../schemas/Player');

const QueryRoot = new graphql.GraphQLObjectType({
	name: 'Query',
	fields: () => ({
		hello: {
			type: graphql.GraphQLString,
			resolve: () => 'Hello World'
		},
		playerById: {
			type: Player,
			args: { id: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) } },
			resolve: async (obj, args, { user }, info) => {
				if (!user) {
					throw new Error('You are not authenticated!');
				}
				const result = await models.Player.findOne({ where: { id: args.id }, include: { model: models.Team } });
				return result;
			}
		},
		players: {
			type: new graphql.GraphQLList(Player),
			resolve: async (obj, args, { user }, info) => {
				if (!user) {
					throw new Error('You are not authenticated!');
				}
				const players = await models.Player.findAll({
					include: { model: models.Team }
				});
				return players;
			}
		}
	})
});

module.exports = QueryRoot;
