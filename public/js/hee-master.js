(function() {
  
  var $btn = $('.hee-reset');
  // web socket connection
  var socket = io.connect('/');
  
  $btn.on('click', function() {
    socket.emit('hee-reset');
  });
  
})();
