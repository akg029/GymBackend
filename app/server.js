const express=require("express")

const server = express();
server.use(express.json());
const bodyParser = require('body-parser')
const path = require('path');
const cors = require("cors");


server.use(cors());
server.use(bodyParser.json({limit: '50mb'}));
server.use(bodyParser.urlencoded({limit: '50mb',extended: true,parameterLimit:50000}));



// user routes
server.post('/usersignUp',require('./routes/user.route'))
server.post('/login',require('./routes/user.route'))

// product route

server.get('/getproduct',require('./routes/product.route'))
server.post('/orderplace',require('./routes/product.route'))

module.exports = server;
