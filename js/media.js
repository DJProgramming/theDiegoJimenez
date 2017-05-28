var photoSlides;

var main = function() {
  photoSlides = document.getElementsByClassName("photoSlide");
  displayViewer();
}

var displayViewer = function(number) {

  $(".photo").click(function() {  // show viewer
    $(".viewer").show();
    for(var i = 0; i < photoSlides.length; i++) {
      $(photoSlides[i]).hide();
    }
    $(photoSlides[number]).show();
    // $(".photoSlide").show();
  });
  $(".viewer").click(function() { // hide viewer
    $(".viewer").hide();
  });
}

var getPhotoSlides = function() {

}

$(document).ready(main);