(function() {
  
  var $btn = $('.hee-btn');
  // web socket connection
  var socket = io.connect('/');
  
  socket.on('enter', function() {
    $btn.addClass('active');
  });
  
  $btn.on('click', function() {
    socket.emit('hee', {
      count: 1
    });
  });
  
  socket.on('leave', function() {
    $btn.removeClass('active');
  });
  
  
})();
