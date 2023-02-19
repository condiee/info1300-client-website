$(document).ready(function() {
  $("#general").on("click", function() {

    if($("#general").hasClass("announcementSelected")) {
      console.log("already selected");
    } else {
      $("#general").addClass("announcementSelected");
      $("#nextshow").removeClass("announcementSelected");
      $("#generalinfo").removeClass("hidden");
      $("#nextshowinfo").addClass("hidden");
    }
  })

  $("#nextshow").on("click", function() {

    if($("#nextshow").hasClass("announcementSelected")) {
      console.log("already selected");
    } else {
      $("#nextshow").addClass("announcementSelected");
      $("#general").removeClass("announcementSelected");
      $("#nextshowinfo").removeClass("hidden");
      $("#generalinfo").addClass("hidden");
    }
  })


})
