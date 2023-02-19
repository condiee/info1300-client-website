$(document).ready(function() {
  $("#gig").on("click", function() {

    if($("#gig").hasClass("selected")) {
      console.log("already selected");
    } else {
      $("#gig").addClass("selected");
      $("#join").removeClass("selected");
      $("#gigForm").removeClass("hidden");
      $("#joinForm").addClass("hidden");
      $("#formDescriptionGig").removeClass("hidden");
      $("#formDescriptonJoin").addClass("hidden");
    }
  })

  $("#join").on("click", function() {

    if($("#join").hasClass("selected")) {
      console.log("already selected");
    } else {
      $("#join").addClass("selected");
      $("#gig").removeClass("selected");
      $("#joinForm").removeClass("hidden");
      $("#gigForm").addClass("hidden");
      $("#formDescriptonJoin").removeClass("hidden");
      $("#formDescriptionGig").addClass("hidden");
    }
  })


})
