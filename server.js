const express = require('express');
const bodyParser = require('body-parser');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');
const QueryRoot = require('./resolvers/QueryRoot');
const MutationRoot = require('./resolvers/MutationRoot');

const db = require('./service/db');
const seed = require('./models/seed');
const envs = require('./envs')(); // environment consts

const schema = new graphql.GraphQLSchema({ 
	query: QueryRoot,
	mutation: MutationRoot,
});

const app = express();
app.use(
	'/api',
	bodyParser.json(),
	graphqlHTTP({
		schema: schema,
		graphiql: true
	})
);

db.sync({ force: true })
	.then(() => app.listen(envs['PORT'], () => {
		return console.log(`Listening on PORT ${envs['PORT']}`);
	}))
	.then(() => seed());
