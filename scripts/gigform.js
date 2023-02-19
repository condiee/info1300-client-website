$(document).ready(function() {
    $("#gigForm").on("submit", function() {
        var formValid = true;

        if($("#name").prop("validity").valid){
            $("#nameError").addClass("hidden");
        } else {
            $("#nameError").removeClass("hidden");
            formValid = false;
        }

        if($("#bandName").prop("validity").valid){
            $("#bandNameError").addClass("hidden");
        } else {
            $("#bandNameError").removeClass("hidden");
            formValid = false;
        }

        if($("#genre").prop("validity").valid){
            $("#genreError").addClass("hidden");
        } else {
            $("#genreError").removeClass("hidden");
            formValid = false;
        }

        if($("#email").prop("validity").valid){
            $("#emailError").addClass("hidden");
        } else {
            $("#emailError").removeClass("hidden");
            formValid = false;
        }

        if($("#bio").prop("validity").valid){
            $("#bioError").addClass("hidden");
        } else {
            $("#bioError").removeClass("hidden");
            formValid = false;
        }

        if (formValid == false) {
          $("#gigError").removeClass("hidden");
        } else {
          $("#gigError").addClass("hidden");
        }

        return formValid;
            });

});
