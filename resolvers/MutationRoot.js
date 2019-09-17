const graphql = require('graphql');
const bcrypt = require('bcrypt');
const jsonwebtoken = require('jsonwebtoken');
const models = require('../models');
const Player = require('../schemas/Player');

const JWT_SECRET = require('../envs')()['JWT_SECRET']; // environment consts JWT_SECRET

const MutationRoot = new graphql.GraphQLObjectType({
	name: 'Mutation',
	fields: () => ({
		signup: {
			type: new graphql.GraphQLObjectType({
				name: 'SignUp',
				fields: () => ({
					status: { type: graphql.GraphQLBoolean },
					msg: { type: graphql.GraphQLString }
				})
			}),
			args: {
				email: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
				first_name: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
				last_name: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
				password: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
				teamId: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) }
			},
			resolve: async (
				parent,
				{ email, first_name, last_name, password, teamId },
				context,
				resolveInfo
			) => {
				const encripted = await bcrypt.hash(password, 10);
				const team = await models.Team.findByPk(teamId);
				const player = await models.Player.create({
					email,
					first_name,
					last_name,
					password: encripted
				});
				player.setTeam(team);
				return {
					status: true,
					msg: 'the user is enrolled'
				};
			}
		},
		login: {
			type: new graphql.GraphQLObjectType({
				name: 'Login',
				fields: () => ({
					status: { type: graphql.GraphQLBoolean },
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
					throw new Error('Incorrect password');
				}
				const token = jsonwebtoken.sign(
					{ id: player.id, email: player.email },
					JWT_SECRET,
					{ expiresIn: '1d' }
				);
				return {
					status: true,
					player,
					token
				};
			}
		},
		createPlayer: {
			type: Player,
			args: {
				first_name: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
				last_name: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
				team_id: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) }
			},
			resolve: async (
				parent,
				{ first_name, last_name, team_id },
				context,
				resolveInfo
			) => {
				const team = await models.Team.findByPk(team_id);
				const createdPlayer = await models.Player.create({
					first_name,
					last_name
				});
				createdPlayer.setTeam(team);
				return 'Player created succesfully';
			}
		}
	})
});

module.exports = MutationRoot;
