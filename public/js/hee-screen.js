(function() {
  
  // sound
  var audio = new Audio('/sound/hee.mp3');
  audio.load();
  audio.autoplay = false;
  
  var $counter = $('.hee-counter');
  // web socket connection
  var socket = io.connect('/');
  
  socket.on('hee-screen', function(data) {
    $counter.text(data.count);
    audio.currentTime = 0;
    audio.play();
  });
  
  socket.on('hee-reset', function(data) {
    $counter.text(data.count);
  });
  
})();
