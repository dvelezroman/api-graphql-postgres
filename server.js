const express = require('express');
const https = require('https');
const fs = require('fs');
const multer = require('multer');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('express-jwt');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');
const MutationRoot = require('./resolvers/MutationRoot');
const QueryRoot = require('./resolvers/QueryRoot');

const db = require('./service/db');
const envs = require('./envs')(); // environment consts
const seed = require('./models/seed');

const keysDir = 'certs/';
const sslOptions = {
	key  : fs.readFileSync(keysDir + 'key.pem'),
	cert : fs.readFileSync(keysDir + 'cert.pem'),
	passphrase: 'Ivana17011701'
};

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const auth = jwt({
	secret: envs.JWT_SECRET,
	algorithms: ['HS256'],
	credentialsRequired: false
});

const schema = new graphql.GraphQLSchema({
	query: QueryRoot,
	mutation: MutationRoot
});

// app.use(cors());

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	next();
});

app.use('/app', function (req, res) {
	// const indexFilePath = path.resolve(
	// 	`${__dirname}/../browser/build/index.html`
	// );
	// res.sendFile(indexFilePath);
	res.status(200).json({ msg: 'message' });
});

app.use(cors());

//app.use(loggingMiddleware);
app.use(
	'/api',
	bodyParser.json(),
	auth,
	graphqlHTTP((request) => {
		return {
			schema,
			context: {
				loggedUser: request.user
			},
			graphiql: true
		};
	})
);

// SET STORAGE
let storage = multer.diskStorage({
	destination: (req, file, cb) => {
		cb(null, './uploads');
	},
	filename: (req, file, cb) => {
		cb(
			null,
			file.fieldname + '.' + file.originalname.split('.')[file.originalname.split('.').length - 1]
		);
	}
});

let upload = multer({ storage: storage });

app.post('/image-upload', upload.single('logo'), (req, res, next) => {
	const file = req.body;
	if (!file) {
		const error = new Error('Please upload a File');
		error.httpStatusCode = 400;
		return next(error);
	}
	res.status(200).json({ status: true, msg: 'Uploaded' });
});

db.sync({ force: false })
	.then(() =>
		app.listen(envs.PORT, () => {
			return console.log(`Server mode: ${envs.ENVIRONMENT}, listening on PORT ${envs.PORT}`);
		})
	); // .then(() => seed());
