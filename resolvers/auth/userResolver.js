const graphql = require('graphql');
const jsonwebtoken = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const models = require('../../models');
const User = require('../../schemas/User');
const JWT_SECRET = require('../../envs')()['JWT_SECRET']; // environment consts JWT_SECRET

const signUp = {
	type: new graphql.GraphQLObjectType({
		name: 'SignUp',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			msg: { type: graphql.GraphQLString },
			token: { type: graphql.GraphQLString }
		})
	}),
	args: {
		document: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
		username: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
		role: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
		email: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
		first_name: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
		last_name: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
		password: { type: graphql.GraphQLNonNull(graphql.GraphQLString) }
	},
	resolve: async (
		parent,
		{ document, email, username, role, first_name, last_name, password },
		context,
		resolveInfo
	) => {
		const encripted = await bcrypt.hash(password, 10);
		try {
			const user = await models.User.create({
				document,
				username,
				role,
				email,
				first_name,
				last_name,
				password: encripted
			});
			if (user) {
				const token = jsonwebtoken.sign(
					{ id: user.id, username: user.username },
					JWT_SECRET,
					{
						expiresIn: '1d'
					}
				);
				return {
					status: true,
					token,
					msg: 'User is enrolled.'
				};
			}
		} catch (error) {
			return {
				status: false,
				msg: error.errors[0].message
			};
		}
	}
};

const login = {
	type: new graphql.GraphQLObjectType({
		name: 'Login',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			msg: { type: graphql.GraphQLString },
			user: { type: User },
			token: { type: graphql.GraphQLString }
		})
	}),
	args: {
		username: { type: graphql.GraphQLNonNull(graphql.GraphQLString) },
		password: { type: graphql.GraphQLNonNull(graphql.GraphQLString) }
	},
	resolve: async (parent, { username, password }, context, resolveInfo) => {
		const user = await models.User.findOne({
			where: { username }
		});
		if (!user) {
			return {
				status: false,
				msg: 'No existe Usuario',
				token: null,
				user: null
			};
		}
		//const valid = await bcrypt.compare(password, player.password);
		const valid = password === user.password;
		if (!valid) {
			return {
				status: false,
				msg: 'Clave incorrecta',
				token: null,
				user: null
			};
		}
		const token = jsonwebtoken.sign(
			{ id: user.id, username: user.username },
			JWT_SECRET,
			{
				expiresIn: '1d'
			}
		);
		return {
			status: true,
			user,
			token,
			msg: 'Login Successful'
		};
	}
};

const getUser = {
	type: new graphql.GraphQLObjectType({
		name: 'GetUser',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			user: { type: User },
			msg: { type: graphql.GraphQLString }
		})
	}),
	args: {
		username: { type: graphql.GraphQLNonNull(graphql.GraphQLString) }
	},
	resolve: async (parent, { username }, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated!'
			};
		}
		const user = await models.User.findOne({
			where: { username }
		});
		if (user) {
			return {
				status: true,
				user,
				msg: 'User found.'
			};
		} else {
			return {
				status: false,
				user,
				msg: 'User not found!'
			};
		}
	}
};

module.exports = {
	signUp,
	login,
	getUser
};
