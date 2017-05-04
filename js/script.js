var main = function() {
  menu();           // show or hide menu
  toggleVideos();   // show or hide videos
  togglePhotos();   // show or hide photos
};

var menu = function() {
  $('.menuIcon').click(function() {
    $('#navigation').fadeToggle(1000);
  });
};

var toggleVideos = function() {
  $('#videoToggle').click(function() {
    $('.videos').fadeToggle(1000);
  });
}

var togglePhotos = function() {
  $('#photoToggle').click(function() {
    $('.photos').fadeToggle(1000);
  });
};

$(document).ready(main);