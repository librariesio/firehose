var express      = require('express');
var bodyParser   = require('body-parser');
var router       = require('./lib/router');
var cors         = require('cors')

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.post('/events', router.firehose.rx);
app.get('/events', cors(), router.firehose.tx);

var port = process.env.PORT || 5001;
app.listen(port, function() {
  console.log('Listening on', port);
});
