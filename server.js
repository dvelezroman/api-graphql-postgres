const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('express-jwt');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');
const QueryRoot = require('./resolvers/QueryRoot');
const MutationRoot = require('./resolvers/MutationRoot');

const db = require('./service/db');
const seed = require('./models/seed');
const envs = require('./envs')(); // environment consts

const app = express();

const auth = jwt({
	secret: envs.JWT_SECRET,
	credentialsRequired: false
});

const schema = new graphql.GraphQLSchema({
	query: QueryRoot,
	mutation: MutationRoot
});

function loggingMiddleware(req, res, next) {
	console.log(req.params);
	next();
}

app.use(loggingMiddleware);
app.use(
	'/api',
	bodyParser.json(),
	auth,
	graphqlHTTP(req => {
		return {
			schema: schema,
			context: {
				user: req.user
			},
			graphiql: true
		};
	})
);

db.sync({ force: true })
	.then(() =>
		app.listen(envs.PORT, () => {
			return console.log(`Listening on PORT ${envs.PORT}`);
		})
	)
	.then(() => seed());
