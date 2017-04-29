var main = function() {
  $('.menuIcon').click(function() {
    $('#navigation').fadeToggle(1000);
  });
};

$(document).ready(main);