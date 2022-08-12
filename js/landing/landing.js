// JavaScript Document
$(document).ready(function() {

  var join_chime = new Audio('https://assets.dailyprincetonian.com/frosh.dailyprincetonian.com/audio/join_chime.mp3');
  var msg_chime = new Audio('https://assets.dailyprincetonian.com/frosh.dailyprincetonian.com/audio/msg.mp3');
  var roar = new Audio('https://assets.dailyprincetonian.com/frosh.dailyprincetonian.com/audio/roar.mov');

  setTimeout(function() {
    $('#connecting').fadeOut('slow');
    setTimeout(function() {
      $('#waiting-room').fadeIn('slow');
      setTimeout(function() {
        $('#meeting').fadeIn('slow');
        join_chime.play();
        setTimeout(function() {
          document.getElementById('chat-icon').style.color = '#E1712F';
          $('#chat-box').fadeIn('slow');
          msg_chime.play();
        }, 3000);
      }, 2500);
    }, 1000);
  }, 1000); // <-- time in milliseconds
});
