const graphql = require('graphql');
const { Client } = require('../schemas/Client');
const User = require('../schemas/User');
const { Person } = require('../schemas/Person');
const { Company } = require('../schemas/Company');
const { Type } = require('../schemas/Type');

const Insurance = new graphql.GraphQLObjectType({
	name: 'Insurance',
	fields: () => ({
		id: {
			type: graphql.GraphQLInt
		},
		ref: {
			type: graphql.GraphQLString
		},
		amount: {
			type: graphql.GraphQLFloat
		},
		premium: {
			type: graphql.GraphQLFloat
		},
		from: {
			type: graphql.GraphQLString
		},
		amount: {
			type: graphql.GraphQLFloat
		},
		term: {
			type: graphql.GraphQLString
		},
		client: {
			type: Client
		},
		company: {
			type: Company
		},
		person: {
			type: Person
		},
		insurance_type: {
			type: Type
		},
		user: {
			type: User
		}
	})
});

Insurance._typeConfig = {
	sqlTable: 'insurances',
	uniqueKey: 'id'
};

const InputInsurance = new graphql.GraphQLInputObjectType({
	name: 'InputInsurance',
	fields: () => ({
		ref: {
			type: graphql.GraphQLString
		},
		amount: {
			type: graphql.GraphQLFloat
		},
		premium: {
			type: graphql.GraphQLFloat
		},
		from: {
			type: graphql.GraphQLString
		},
		amount: {
			type: graphql.GraphQLFloat
		},
		term: {
			type: graphql.GraphQLString
		},
		clientId: {
			type: graphql.GraphQLInt
		},
		insuranceTypeId: {
			type: graphql.GraphQLInt
		},
		personId: {
			type: graphql.GraphQLInt
		},
		companyId: {
			type: graphql.GraphQLInt
		},
		userId: {
			type: graphql.GraphQLInt
		}
	})
});

InputInsurance._typeConfig = {
	sqlTable: 'insurances',
	uniqueKey: 'id'
};

module.exports = {
	Insurance,
	InputInsurance
};