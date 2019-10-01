const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('express-jwt');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');
const MutationRoot = require('./resolvers/MutationRoot');
const QueryRoot = require('./resolvers/QueryRoot');

const db = require('./service/db');
const seed = require('./models/seed');
const envs = require('./envs')(); // environment consts

const app = express();
app.use(cors());

const auth = jwt({
	secret: envs.JWT_SECRET,
	credentialsRequired: false
});

const schema = new graphql.GraphQLSchema({
	query: QueryRoot,
	mutation: MutationRoot
});

app.use(cors());

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

//app.use(loggingMiddleware);
app.use(
	'/api',
	bodyParser.json(),
	auth,
	graphqlHTTP((request, response, graphQLParams) => {
		return {
			schema,
			context: {
				loggedUser: request.user
			},
			graphiql: true
		};
	})
);

db.sync({ force: false }).then(() =>
	app.listen(envs.PORT, () => {
		return console.log(`Listening on PORT ${envs.PORT}`);
	})
);
//.then(() => seed());
