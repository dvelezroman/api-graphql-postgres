const { Player, Team, Match } = require('./index');

const players = [
	{
		detail: {
			first_name: 'Dario',
			last_name: 'Velez',
			email: 'usuario@email.com',
			password: 'password'
		},
		team: 'Barcelona'
	},
	{
		detail: {
			first_name: 'Jose',
			last_name: 'Velez',
			email: 'usuario@email.com',
			password: 'password'
		},
		team: 'Emelec'
	},
	{
		detail: {
			first_name: 'Ariel',
			last_name: 'Holgado',
			email: 'usuario@email.com',
			password: 'password'
		},
		team: 'Nacional'
	},
	{
		detail: {
			first_name: 'Mariano',
			last_name: 'Lopez',
			email: 'usuario@email.com',
			password: 'password'
		},
		team: 'Aucas'
	},
];

const teams = [
	{
		name: 'Emelec'
	},
	{
		name: 'Barcelona'
	},
	{
		name: 'Aucas'
	},
	{
		name: 'Nacional'
	}
];

const matches = [
	{
		detail: {
			date: '2019/08/07',
			result: 'homeTeamId'
		},
		homeTeamId: 'Barcelona',
		awayTeamId: 'Emelec'
	},
	{
		detail: {
			date: '2019/08/07',
			result: 'awayTeamId'
		},
		homeTeamId: 'Barcelona',
		awayTeamId: 'Emelec'
	},
	{
		detail: {
			date: '2019/08/07',
			result: 'awayTeamId'
		},
		homeTeamId: 'Aucas',
		awayTeamId: 'Nacional'
	}
];

function seed() {
	const pTeams = teams.map(team => Team.create(team));
	Promise.all(pTeams).then(() => {
		players.map(player =>
			Team.findOne({
				where: {
					name: player.team
				}
			}).then(foundTeam =>
				Player.create(player.detail).then(createdPlayer =>
					createdPlayer.setTeam(foundTeam)
				)
			)
		);
	}).then(() => {
		matches.map(match => Team.findOne({
			where: { name: match.homeTeamId }
		}).then(homeTeam => {
			Team.findOne({ where: { name: match.awayTeamId }}).then(awayTeam => {
				Match.create({ ...match.detail, homeTeamId: homeTeam.dataValues.id, awayTeamId: awayTeam.dataValues.id }).then(createdMatch => {
					console.log(`Match ${createdMatch.dataValues.id} = ${homeTeam.dataValues.name} vs ${awayTeam.dataValues.name}`);
				});
			});
		}));
	});
}

module.exports = seed;
