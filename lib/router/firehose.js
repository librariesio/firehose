var EventEmitter = require('eventemitter3');
var emitter = new EventEmitter();

var rx = function(req, res) {
  if(req.query.api_key === process.env.API_KEY) {
    var data = req.body;
    emitter.emit('pkg', data);
  }
  res.end();
};

var tx = function(req, res) {
  res.writeHead(200, {
    'Content-Type':   'text/event-stream',
    'Cache-Control':  'no-cache',
    'Connection':     'keep-alive'
  });

  // Heartbeat
  var nln = function() {
    res.write('\n');
  }
  var hbt = setInterval(nln, 15000);

  var onPkg = function(data){
    res.write("retry: 500\n");
    res.write(`event: event\n`);
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  emitter.on('pkg', onPkg);

  // Clear heartbeat and listener
  req.on('close', function() {
    clearInterval(hbt);
    emitter.removeListener('pkg', onPkg);
  });
};

module.exports = {
  rx: rx,
  tx: tx
};
