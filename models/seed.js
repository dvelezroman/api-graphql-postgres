const { User, Client, People, InsuranceType, Company, Config } = require('./index');

const users = [
	{
		detail: {
			document: '1310422793',
			username: 'admin',
			first_name: 'Dario',
			last_name: 'Velez',
			email: 'usuario1@email.com',
			password: 'Seguros2019@',
			role: 'admin'
		}
	}
];

const clients = [
	{
		detail: {
			type: 'Natural',
			name: 'CaffeinaSW S.A.',
			document: '1310422793',
			address: 'Calle Manta y 3 de Mayo',
			province: 'Manabí',
			city: 'Portoviejo',
			status: true
		}
	}
];

const people = [
	{
		detail: {
			document: '1310422793',
			first_name: 'Dario',
			last_name: 'Velez',
			email: 'dvelezroman@gmail.com',
			city: 'Portoviejo',
			province: 'Manabí',
			address: 'Calle Manta y 3 de Mayo',
			birthday: '1982/07/23'
		}
	}
];

const companies = [
	{
		detail: {
			name: 'Equinoccial',
			ref: '1111'
		}
	},
	{
		detail: {
			name: 'Sucre',
			ref: '1122'
		}
	}
];

const insurance_types = [
	{
		detail: {
			name: 'Vehiculos',
			code: '1101'
		}
	},
	{
		detail: {
			name: 'Salud',
			code: '1102'
		}
	}
];

const configs = [
	{
		detail: {
			mailserver: 'smtp.googlemail.com',
			mailuser: 'caffeinasw@gmail.com',
			mailpassword: 'telurico1604',
			mailport: 465,
			welcome: false,
			birthday: false,
			renewal: false
		}
	}
];

function seed() {
	const pConfig = configs.map(config => Config.create(config.detail));
	const pUser = users.map(user => User.create(user.detail));
	const pClients = clients.map(client => Client.create(client.detail));
	const pPeople = people.map(person => People.create(person.detail));
	const pCompanies = companies.map(company => Company.create(company.detail));
	const pInsuranceTypes = insurance_types.map(insurance_type =>
		InsuranceType.create(insurance_type.detail)
	);
	Promise.all(pConfig, pUser, pClients, pPeople, pCompanies, pInsuranceTypes).then(() => {
		console.log('DataBase Seeded...');
	});
}

module.exports = seed;
