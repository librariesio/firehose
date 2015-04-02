/*jshint strict:true, trailing:false, unused:true, node:true */
'use strict';

require("babel/register");

var events = require('events');
var emitter = new events.EventEmitter();

var rx = function(req, res) {
  var data = req.body;
  emitter.emit('pkg', data);
  res.end();
};

var tx = function(req, res) {
  res.writeHead(200, {
    'Content-Type':   'text/event-stream',
    'Cache-Control':  'no-cache',
    'Connection':     'keep-alive'
  });

  // Heartbeat
  var nln = () => res.write('\n');
  var hbt = setInterval(nln, 15000);

  var onPkg = (data) => {
    res.write("retry: 500\n");
    res.write(`event: pkg\n`);
    res.write(`data: ${JSON.stringify(data)}\n\n`);
  };

  emitter.on('pkg', onPkg);

  // Clear heartbeat and listener
  req.on('close', () => {
    clearInterval(hbt);
    emitter.removeListener('pkg', onPkg);
  });
};

module.exports = {
  rx: rx,
  tx: tx
}; 
