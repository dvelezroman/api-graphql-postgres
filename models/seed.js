const { Player, Team, Match } = require('./index');

const players = [
	{
		detail: {
			first_name: 'Dario',
			last_name: 'Velez'
		},
		team: 'Barcelona'
	},
	{
		detail: {
			first_name: 'Jose',
			last_name: 'Velez'
		},
		team: 'Emelec'
	}
];

const teams = [
	{
		name: 'Emelec'
	},
	{
		name: 'Barcelona'
	}
];

const matches = [
	{
		detail: {
      date: '2019/08/07',
    },
	},
	{
		detail: {
			date: '2019/08/07'
		}
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
	})
}

module.exports = seed;
