// read modules
var path = require('path');
var http = require('http');
var fs = require('fs');
var argv = require('optimist').argv;
var port = argv.port || 3000;
var request = require('request');
var io = require('socket.io');

// get base directory path
var basedir = path.join(__dirname, '..');

// create web server
var express = require('express');
var app = express();
app.configure(function() {
	app.use(express.bodyParser());
	app.use(express.methodOverride());
	// static server setting
	app.use(express['static'](path.join(basedir, '/public')));
	
});
var server = http.createServer(app);

var hee = require('./hee');
// socket.io
var io = io.listen(server);
io.set( "log level", 1 );

io.sockets.on('connection', function (socket) {
  
  socket.emit('enter');
  
  socket.on('hee', function(data) {
    var count = hee.plus(data.count);
    socket.broadcast.emit('hee-screen', { count: count });
  });
  
  socket.on('hee-reset', function() {
    var count = hee.reset();
    socket.broadcast.emit('hee-reset', { count: count });
  });
  
  socket.on('disconnect', function() {
    socket.emit('leave');
  });
  
});

// start server
server.listen(port, function(){
	console.log('server started port on ' + port);
});
