// When the document is ready
$(document).ready(function() {

  // When the button is clicked
  var expanded = false;
  $("#butt1").on("click", function () {
    if (expanded === false){
    $("#faq1").removeClass("hidden");
    expanded = true;
    }
    else{
      $("#faq1").addClass("hidden");
      expanded = false;
    }
  });
  $("#butt2").on("click", function () {
    if (expanded === false){
    $("#faq2").removeClass("hidden");
    expanded = true;
    }
    else{
      $("#faq2").addClass("hidden");
      expanded = false;
    }
  });
  $("#butt3").on("click", function () {
    if (expanded === false){
    $("#faq3").removeClass("hidden");
    expanded = true;
    }
    else{
      $("#faq3").addClass("hidden");
      expanded = false;
    }
  });
  $("#butt4").on("click", function () {
    if (expanded === false){
    $("#faq4").removeClass("hidden");
    expanded = true;
    }
    else{
      $("#faq4").addClass("hidden");
      expanded = false;
    }
  });
  $("#butt5").on("click", function () {
    if (expanded === false){
    $("#faq5").removeClass("hidden");
    expanded = true;
    }
    else{
      $("#faq5").addClass("hidden");
      expanded = false;
    }
  });
  $("#butt6").on("click", function () {
    if (expanded === false){
    $("#faq6").removeClass("hidden");
    expanded = true;
    }
    else{
      $("#faq6").addClass("hidden");
      expanded = false;
    }
  });
  $("#butt7").on("click", function () {
    if (expanded === false){
    $("#faq7").removeClass("hidden");
    expanded = true;
    }
    else{
      $("#faq7").addClass("hidden");
      expanded = false;
    }
  });
  $("#butt8").on("click", function () {
    if (expanded === false){
    $("#faq8").removeClass("hidden");
    expanded = true;
    }
    else{
      $("#faq8").addClass("hidden");
      expanded = false;
    }
  });
  $("#butt9").on("click", function () {
    if (expanded === false){
    $("#faq9").removeClass("hidden");
    expanded = true;
    }
    else{
      $("#faq9").addClass("hidden");
      expanded = false;
    }
  });



  /* Interactivity for Feedback Form */
  $("#FeedbackForm").on("submit", function() {
    var formValid = true;

    if ( $("#commentsA").prop("validity").valid ) {
      $("#textareaErrorr").addClass("hidden");
    } else {
      $("#textareaErrorr").removeClass("hidden");
      formValid = false;
    };

    return formValid;
  });


});
