const graphql = require('graphql');
const { signUp, login } = require('./auth/userResolver');
const { newClient, updateClient } = require('./client/clientResolver');

const MutationRoot = new graphql.GraphQLObjectType({
	name: 'Mutation',
	fields: () => ({
		signup: signUp,
		login: login,
		newClient: newClient,
		updateClient: updateClient
		// createPlayer: {
		// 	type: Player,
		// 	args: {
		// 		first_name: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
		// 		last_name: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
		// 		team_id: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) }
		// 	},
		// 	resolve: async (parent, { first_name, last_name, team_id }, context, resolveInfo) => {
		// 		const team = await models.Team.findByPk(team_id);
		// 		const createdPlayer = await models.Player.create({
		// 			first_name,
		// 			last_name
		// 		});
		// 		createdPlayer.setTeam(team);
		// 		return 'Player created succesfully';
		// 	}
		// }
	})
});

module.exports = MutationRoot;
