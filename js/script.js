var main = function() {
  menu();           // show or hide menu
  toggleVideos();   // show or hide videos
  togglePhotos();   // show or hide photos
  showMedia();      // show all media
  resizeHeight();
};

var menu = function() {
  $('.menuIcon').click(function() {
    $('#navigation').fadeToggle(1000);
  });
};

var toggleVideos = function() {
  $('#videoToggle').click(function() {
    // $('.videos').fadeToggle(1000);
    $('.videos').fadeIn(1000);
    $('.photos').fadeOut(1000);
  });
}

var togglePhotos = function() {
  $('#photoToggle').click(function() {
    // $('.photos').fadeToggle(1000);
    $('.photos').fadeIn(1000);
    $('.videos').fadeOut(1000);
  });
};

var showMedia = function() {
  $('#mediaToggle').click(function() {
    // $('.photos').fadeToggle(1000);
    $('.photos').fadeIn(1000);
    $('.videos').fadeIn(1000);
  });
};

var resizeHeight = function () {
    var ratio = 9 / 16, $div = $('.video');
    $div.height($div.width() * ratio);
    $(document).bind('resize', function() { $div.height($div.width() * ratio); });
};

$(document).ready(main);

 $(window).resize(resizeHeight);