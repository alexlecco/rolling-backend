const express = require('express');
const bodyParser = require('body-parser');
const mockedData = require('./data/db.json');
const comments = mockedData.comments;
const usersRoute = require('./routes/users');
const authRoute = require('./routes/auth');

const myApp = express();

// Middlewares
myApp.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, access-token');
	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
	next();
});
myApp.use(bodyParser.urlencoded({extended: false}));
myApp.use(bodyParser.json());
myApp.use('/api', usersRoute);
myApp.use('/api', authRoute);

module.exports = myApp;