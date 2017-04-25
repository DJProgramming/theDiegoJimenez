// var main = function() {
//   $('.dropdown-toggle').click(function() {
//     $('navigation').toggle();
//   });
// }

var main = function() {
  /* Push the body and the nav over by 285px over */
  $('.iconMenu').click(function() {
    $('.slideIn').animate({
      top: "0px"
    }, 200);
  });

  /* Then push them back */
  $('.close').click(function() {
    $('.slideIn').animate({
      top: "-300px"
    }, 200);
  });
};

$(document).ready(main);