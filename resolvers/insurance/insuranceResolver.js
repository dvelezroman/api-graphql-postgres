const graphql = require('graphql');
const models = require('../../models');
const { Insurance, InputInsurance } = require('../../schemas/Insurance');

const getInsurances = {
	description: 'Get Insurances',
	type: new graphql.GraphQLObjectType({
		name: 'GetInsurances',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			insurances: { type: new graphql.GraphQLList(Insurance) },
			msg: { type: graphql.GraphQLString }
		})
	}),
	resolve: async (parent, args, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated!',
				insurances: []
			};
		}
		const insurances = await models.Insurance.findAll({
			include: [models.Client, models.Company, models.InsuranceType, models.People, models.User]
		});
		if (insurances.length) {
			return {
				status: true,
				insurances,
				msg: 'Insurances found'
			};
		} else {
			return {
				status: false,
				insurances,
				msg: 'No Insurances found'
			};
		}
	}
};

const getInsurance = {
	description: 'Gets a Insurance by Id',
	type: new graphql.GraphQLObjectType({
		name: 'GetInsurance',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			insurance: { type: Insurance },
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
		const insurance = await models.Insurance.findOne({
			where: { id },
			include: [models.Client, models.Company, models.InsuranceType, models.People, models.User]
		});
		if (insurance) {
			return {
				status: true,
				insurance,
				msg: 'Insurance found'
			};
		}
		return {
			status: false,
			insurance,
			msg: 'No Insurance found'
		};
	}
};

const newInsurance = {
	description: 'Creates a New Insurance',
	type: new graphql.GraphQLObjectType({
		name: 'NewInsurance',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			insurance: { type: Insurance },
			msg: { type: graphql.GraphQLString }
		})
	}),
	args: {
		insurance: { type: InputInsurance }
	},
	resolve: async (parent, { insurance }, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated'
			};
		}
		const insuranceCreated = await models.Insurance.create(insurance);
		if (insuranceCreated) {
			return {
				status: true,
				insurance: insuranceCreated,
				msg: 'Insurance Created'
			};
		}
		return {
			status: false,
			insurance: null,
			msg: 'No Insurance created'
		};
	}
};

const updateInsurance = {
	description: 'Updates an Insurance',
	type: new graphql.GraphQLObjectType({
		name: 'UpdateInsurance',
		fields: () => ({
			status: { type: graphql.GraphQLBoolean },
			insurance: { type: Insurance },
			msg: { type: graphql.GraphQLString }
		})
	}),
	args: {
		id: { type: graphql.GraphQLInt },
		insurance: { type: InputInsurance }
	},
	resolve: async (parent, { insurance, id }, { loggedUser }, resolveInfo) => {
		if (!loggedUser) {
			return {
				status: false,
				msg: 'You are not authenticated'
			};
		}
		const insuranceUpdated = await models.Insurance.update({ ...insurance }, { where: { id } });
		if (insuranceUpdated) {
			return {
				status: true,
				insurance: insuranceUpdated,
				msg: 'Insurance Updated'
			};
		}
		return {
			status: false,
			insurance: null,
			msg: 'Insurance not found!'
		};
	}
};

const deleteInsurance = {
	description: 'Deletes an Insurance',
	type: new graphql.GraphQLObjectType({
		name: 'DeleteInsurance',
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
		const insuranceDeleted = await models.Insurance.destroy({ where: { id } });
		if (insuranceDeleted) {
			return {
				status: true,
				msg: 'Insurance Deleted'
			};
		}
		return {
			status: false,
			msg: 'Insurance was not deleted'
		};
	}
};

module.exports = {
	getInsurances,
	getInsurance,
	newInsurance,
	updateInsurance,
	deleteInsurance
};