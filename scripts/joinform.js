$(document).ready(function() {

    $("#joinForm").on("submit", function() {
        var formValid = true;

        if($("#userName").prop("validity").valid){
            $("#userNameError").addClass("hidden");
        } else {
            $("#userNameError").removeClass("hidden");
            formValid = false;
        }

        if($("#userEmail").prop("validity").valid){
            $("#userEmailError").addClass("hidden");
        } else {
            $("#userEmailError").removeClass("hidden");
            formValid = false;
        }

        if (formValid==true) {
            $("#joinError").addClass("hidden");
        } else {
            $("#joinError").removeClass("hidden");
        }

        return formValid;
            });

});
