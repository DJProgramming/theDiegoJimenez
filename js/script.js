// var main = function() {
//   $('.dropdown-toggle').click(function() {
//     $('navigation').toggle();
//   });
// }

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
    /*
    $('.slideIn').animate({
      top: "10px"
    }, 200);
  });

  $('.close').click(function() {
    $('.slideIn').animate({
      top: "-300px"
    }, 200);
    */

  });
};

$(document).ready(main);