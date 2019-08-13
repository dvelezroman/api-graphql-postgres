const Team = require('./Team');
const Player = require('./Player');
const Match = require('./Match');

Team.hasMany(Player);

Player.belongsTo(Team);

Team.hasOne(Match, { as: 'HomeTeam', foreignKey : 'homeTeamId'});
Team.hasOne(Match, { as: 'AwayTeam', foreignKey : 'awayTeamId'});

module.exports = {
	Team,
	Player,
	Match
};
