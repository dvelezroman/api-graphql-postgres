const graphql = require('graphql');
const models = require('../../models');
const { Company, InputCompany } = require('../../schemas/Company');

const getCompanies = {
	description: 'Get all Companies',
	type: new graphql.GraphQLObjectType({
		name: 'GetCompanies',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			companies: { type: new graphql.GraphQLList(Company) },
			msg: { type: graphql.GraphQLString }
		})
	}),
	resolve: async (parent, args, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated!',
				companies: []
			};
		}
		const companies = await models.Company.findAll();
		if (companies.length) {
			return {
				status: true,
				companies,
				msg: 'Okay'
			};
		} else {
			return {
				status: false,
				companies,
				msg: 'No Clients'
			};
		}
	}
};

const getCompany = {
	description: 'Gets a Company by his Id',
	type: new graphql.GraphQLObjectType({
		name: 'GetCompany',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			company: { type: Company },
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
		const company = await models.Company.findOne({ where: { id } });
		if (client) {
			return {
				status: true,
				company,
				msg: 'Okay'
			};
		}
		return {
			status: false,
			company,
			msg: 'No Client Found'
		};
	}
};

const newCompany = {
	description: 'Creates a New Company',
	type: new graphql.GraphQLObjectType({
		name: 'NewCompany',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			company: { type: Company },
			msg: { type: graphql.GraphQLString }
		})
	}),
	args: {
		company: { type: InputCompany }
	},
	resolve: async (parent, { company }, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated'
			};
		}
		const companyCreated = await models.Company.create(company);
		if (companyCreated) {
			return {
				status: true,
				company: companyCreated,
				msg: 'Company Found'
			};
		}
		return {
			status: false,
			company: null,
			msg: 'No Company Found'
		};
	}
};

const updateCompany = {
	description: 'Updates a Company',
	type: new graphql.GraphQLObjectType({
		name: 'UpdateCompany',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			company: { type: Company },
			msg: { type: graphql.GraphQLString }
		})
	}),
	args: {
		id: { type: graphql.GraphQLInt },
		company: { type: InputCompany }
	},
	resolve: async (parent, { company, id }, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated'
			};
		}
		const companyUpdated = await models.Company.update({ ...company }, { where: { id } });
		if (companyUpdated) {
			return {
				status: true,
				company: companyUpdated,
				msg: 'Company Created'
			};
		}
		return {
			status: false,
			company: null,
			msg: 'Company not Found'
		};
	}
};

const deleteCompany = {
	description: 'Deletes a Company',
	type: new graphql.GraphQLObjectType({
		name: 'DeleteCompany',
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
		const companyDeleted = await models.Company.destroy({ where: { id } });
		if (companyDeleted) {
			return {
				status: true,
				msg: 'Company Deleted'
			};
		}
		return {
			status: false,
			msg: 'Company was not deleted'
		};
	}
};

module.exports = {
	getCompanies,
	getCompany,
	newCompany,
	updateCompany,
	deleteCompany
};
