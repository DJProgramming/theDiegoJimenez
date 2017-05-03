var main = function() {
  $('.menuIcon').click(function() {
    $('#navigation').fadeToggle(1000);
  });

  $('#videoToggle').click(function() {
    $('.videos').fadeToggle(1000);
  });

  $('#photoToggle').click(function() {
    $('.photos').fadeToggle(1000);
  });
};

$(document).ready(main);