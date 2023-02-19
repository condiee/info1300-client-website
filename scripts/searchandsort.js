$(document).ready(function() {
  console.log("DOM is ready");

  $("#sortlist").on("change", function() {
    var sort = this.value;
    if (sort == "date") {
      var i = 9;
      while (i > 0) {
        var identifier = "#" + i.toString();
        var content = $(identifier).clone();
        $(identifier).remove();
        $("#showList").append(content);
        i--;
      }
    }
    else if (sort == "show") {
      var i = 0;
      var content = $("#showList").children().first().clone();
      while (i < 9) {
        content = $("#showList").children().first().clone();
        var identifier = content.attr('id');
        var count = i;
        var compare = $("#showList").children().first().next().clone();
        var compareIndex = $("#showList").children().first().next().attr('id');
        while (count < 8) {
          if (content.text() > compare.text()) {
            content = compare.clone();
            identifier = compare.attr('id');
          }
          compare = $("#" + compareIndex).next().clone();
          compareIndex = $("#" + compareIndex).next().attr('id');
          count++;
        }
        console.log("move " + content.attr('id'));
        $("#" + identifier).remove();
        $("#showList").append(content);
        i++;
      }
    }

  })

  $("#searchbox").on("change", function() {
    $("#showList").children().each(function() {

      var text = $('#searchbox').val().toLowerCase();
      if ($(this).text().toLowerCase().indexOf(text) < 0) {
        $(this).addClass("hidden");
      } else {
        $(this).removeClass("hidden");
      }

    })
  })
})
