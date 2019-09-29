const graphql = require('graphql');
const models = require('../../models');
const { Person, InputPerson } = require('../../schemas/Person');

const getPeople = {
	description: 'Get People',
	type: new graphql.GraphQLObjectType({
		name: 'GetPeople',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			people: { type: new graphql.GraphQLList(Person) },
			msg: { type: graphql.GraphQLString }
		})
	}),
	resolve: async (parent, args, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated!',
				people: []
			};
		}
		const people = await models.People.findAll();
		if (people.length) {
			return {
				status: true,
				people,
				msg: 'Okay'
			};
		} else {
			return {
				status: false,
				people,
				msg: 'No Clients'
			};
		}
	}
};

const getPerson = {
	description: 'Gets a Person by his Id',
	type: new graphql.GraphQLObjectType({
		name: 'GetPerson',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			person: { type: Person },
			msg: { type: graphql.GraphQLString }
		})
	}),
	args: {
		id: { type: graphql.GraphQLNonNull(graphql.GraphQLInt) }
	},
	resolve: async (parent, { id }, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated'
			};
		}
		const person = await models.People.find({ where: { id } });
		if (client) {
			return {
				status: true,
				person,
				msg: 'Person found'
			};
		}
		return {
			status: false,
			person,
			msg: 'No Person found'
		};
	}
};

const newPerson = {
	description: 'Creates a New Person',
	type: new graphql.GraphQLObjectType({
		name: 'NewPerson',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			person: { type: Person },
			msg: { type: graphql.GraphQLString }
		})
	}),
	args: {
		person: { type: InputPerson }
	},
	resolve: async (parent, { person }, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated'
			};
		}
		const personCreated = await models.People.create(person);
		if (personCreated) {
			return {
				status: true,
				person: personCreated,
				msg: 'Person Created'
			};
		}
		return {
			status: false,
			person: null,
			msg: 'No Person created'
		};
	}
};

const updatePerson = {
	description: 'Updates a Person',
	type: new graphql.GraphQLObjectType({
		name: 'UpdatePerson',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			person: { type: Person },
			msg: { type: graphql.GraphQLString }
		})
	}),
	args: {
		id: { type: graphql.GraphQLInt },
		person: { type: InputPerson }
	},
	resolve: async (parent, { person, id }, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated'
			};
		}
		const personUpdated = await models.Person.update({ ...person }, { where: { id } });
		if (personUpdated) {
			return {
				status: true,
				person: personUpdated,
				msg: 'Person Updated'
			};
		}
		return {
			status: false,
			person: null,
			msg: 'Person not found!'
		};
	}
};

const deletePerson = {
	description: 'Deletes a Person',
	type: new graphql.GraphQLObjectType({
		name: 'DeletePerson',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			msg: { type: graphql.GraphQLString }
		})
	}),
	args: {
		id: { type: graphql.GraphQLInt }
	},
	resolve: async (parent, { id }, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated'
			};
		}
		const personDeleted = await models.Person.destroy({ where: { id } });
		if (personDeleted) {
			return {
				status: true,
				msg: 'Person Deleted'
			};
		}
		return {
			status: false,
			msg: 'Person was not deleted'
		};
	}
};

module.exports = {
	getPeople,
	getPerson,
	newPerson,
	updatePerson,
	deletePerson
};
