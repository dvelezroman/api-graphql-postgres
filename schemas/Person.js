const graphql = require('graphql');

const Person = new graphql.GraphQLObjectType({
	name: 'Person',
	fields: () => ({
		id: {
			type: graphql.GraphQLInt
		},
		document: {
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
		city: {
			type: graphql.GraphQLString
		},
		province: {
			type: graphql.GraphQLString
		},
		address: {
			type: graphql.GraphQLString
		},
		birthday: {
			type: new graphql.GraphQLScalarType({
				name: 'birthdayDate',
				serialize(value) {
					let date = new Date(value);
					return date.toJSON().split('T')[0];
				}
			})
		}
	})
});

Person._typeConfig = {
	sqlTable: 'people',
	uniqueKey: 'id'
};

const InputPerson = new graphql.GraphQLInputObjectType({
	name: 'InputPerson',
	fields: () => ({
		document: {
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
		city: {
			type: graphql.GraphQLString
		},
		province: {
			type: graphql.GraphQLString
		},
		address: {
			type: graphql.GraphQLString
		},
		birthday: {
			type: graphql.GraphQLString
		}
	})
});

InputPerson._typeConfig = {
	sqlTable: 'people',
	uniqueKey: 'id'
};

module.exports = {
	Person,
	InputPerson
};
