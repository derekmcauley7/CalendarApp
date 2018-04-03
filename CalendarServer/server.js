const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api');

var app = express();

app 
    .use(bodyParser.json({type: 'application/vnd.api+json'}))
    .use('/api', api)
    .listen(4301);
 
