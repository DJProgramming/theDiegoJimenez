var visible = false;

var main = function() {
  $('.menuIcon').click(function() {
    if(visible) {
      $('#navigation').hide();
      visible = false;
    } else {
      $('#navigation').show();
      visible = true;
    }
  });
};

$(document).ready(main);