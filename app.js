/*jshint strict:true, trailing:false, unused:true, node:true */
'use strict';

require("babel/register");

var express      = require('express');
var bodyParser   = require('body-parser');
var serve_static = require('serve-static');
var debug        = require('debug')('firehose');
var router       = require('./lib/router');
var cors         = require('cors')

var app = express();
app.use(bodyParser.json());
app.use(serve_static('static'));
app.use(bodyParser.urlencoded({ 
  extended: true 
}));

app.post('/events', router.firehose.rx);
app.get('/events', cors(), router.firehose.tx);

var port = process.env.PORT || 5001;
app.listen(port, function() {
  debug('Listening on', port);
});
