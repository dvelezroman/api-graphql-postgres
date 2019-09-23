const graphql = require('graphql');
const jsonwebtoken = require('jsonwebtoken');
const models = require('../models');
const Player = require('../schemas/User');

const JWT_SECRET = require('../envs')()['JWT_SECRET']; // environment consts JWT_SECRET

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
				const result = await models.Player.findOne({
					where: { id: args.id },
					include: { model: models.Team }
				});
				return result;
			}
		},
		login: {
			type: new graphql.GraphQLObjectType({
				name: 'Login',
				fields: () => ({
					status: { type: graphql.GraphQLBoolean },
					msg: { type: graphql.GraphQLString },
					player: { type: Player },
					token: { type: graphql.GraphQLString }
				})
			}),
			args: {
				email: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
				password: { type: graphql.GraphQLNonNull(graphql.GraphQLString) }
			},
			resolve: async (parent, { email, password }, context, resolveInfo) => {
				const player = await models.Player.findOne({
					where: { email },
					include: { model: models.Team }
				});
				if (player.dataValues.email !== email) {
					throw new Error('No user with that email');
				}
				//const valid = await bcrypt.compare(password, player.password);
				const valid = password === player.password;
				if (!valid) {
					return {
						status: false,
						msg: 'Incorrect Password',
						token: null,
						player: null
					};
				}
				const token = jsonwebtoken.sign({ id: player.id, email: player.email }, JWT_SECRET, {
					expiresIn: '1d'
				});
				return {
					status: true,
					player,
					token,
					msg: 'Login Successful'
				};
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
