// For the slideshow in homepage

$(document).ready(function() {

  var images = [
    "images/keys.jpg",  // index 0
    "images/crowd.png", // index 1
    "images/green.png", // index 2
    "images/guitar.png", // index 3
    "images/Anjimile.png", // index 4
    "images/poster.png", // index 5
    "images/stripes.png", // index 6
    "images/group.png", // index 7
  ];

  var currentIndex = 0;

  // When the next button is clicked
  $("#slideshowNext").on("click", function () {
    if (currentIndex == 0 || currentIndex == 1 || currentIndex == 2 || currentIndex == 3 || currentIndex == 4 || currentIndex == 5 || currentIndex == 6) {
      $("#slideshowImage").attr("src", images[++currentIndex]);
  } else if (currentIndex == 7) {
      $("#slideshowImage").attr("src", images[0]);
      currentIndex = 0;
    }
  });

  // When the previous button is clicked
  $("#slideshowPrevious").on("click", function () {
    if (currentIndex == 1 || currentIndex == 2 || currentIndex == 3 || currentIndex == 4 || currentIndex == 5 || currentIndex == 6 || currentIndex == 7) {
      $("#slideshowImage").attr("src", images[--currentIndex]);
    } else if (currentIndex == 0) {
      $("#slideshowImage").attr("src", images[7]);
      currentIndex = 7;
    }
  });

});
