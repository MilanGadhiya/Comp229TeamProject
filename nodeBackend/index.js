var http = require('http');
var express = require('express');
var port = process.env.PORT || 8080;
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var dotenv = require('dotenv');
var appRoutes = require('./routes/appRoutes');

dotenv.config( { path : 'config.env'} )

const connectDB = require('./server/database/connection');
// mongodb connection
connectDB();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', appRoutes);

http.createServer(app).listen(port);

console.log("Backend Running on port:", port);