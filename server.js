const express = require('express');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');
const db = require('./service/db');
const seed = require('./models/seed');

const QueryRoot = new graphql.GraphQLObjectType({
	name: 'Query',
	fields: () => ({
		hello: {
			type: graphql.GraphQLString,
			resolve: () => 'Hello World!'
		}
	})
});

const schema = new graphql.GraphQLSchema({ query: QueryRoot });

const app = express();
app.use(
	'/api',
	graphqlHTTP({
		schema: schema,
		graphiql: true
	})
);

db.sync({ force: true })
	.then(() => app.listen(3000, () => console.log('Listening on PORT 3000')))
	.then(() => seed());
