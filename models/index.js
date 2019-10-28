const Client = require('./Client');
const People = require('./People');
const User = require('./User');
const Insurance = require('./Insurance');
const InsuranceType = require('./InsuranceType');
const Company = require('./Company');
const Config = require('./Config');
const Office = require('./Office');

Insurance.belongsTo(Client);
Insurance.belongsTo(InsuranceType);
Insurance.belongsTo(People);
Insurance.belongsTo(Company);
Insurance.belongsTo(User);

module.exports = {
	Client,
	People,
	User,
	Insurance,
	InsuranceType,
	Company,
	Config,
	Office
};
