$("#video").hide();

(function ($) {
  "use strict";

  var fullHeight = function () {
    $(".js-fullheight").css("height", $(window).height());
    $(window).resize(function () {
      $(".js-fullheight").css("height", $(window).height());
    });
  };
  fullHeight();

  $("#sidebarCollapse").on("click", function () {
    $("#sidebar").toggleClass("active");
  });
})(jQuery);

// $("button").click(function () {
//   $("p").hide();
// });

$(window).on("hashchange", function () {
  hash = window.location.hash;
  console.log("changed");
  $("#kit1").addClass("hideArea");
  $("#kit2").addClass("hideArea");
  $("#kit3").addClass("hideArea");
  if (hash == "#kit1") {
    console.log("on kit 1");
    $("#kit1").removeClass("hideArea");
  }
  if (hash == "#kit2") {
    console.log("on kit 2");
    $("#kit2").removeClass("hideArea");
  }

  if (hash == "#kit3") {
    console.log("on kit 3");
    $("#kit3").removeClass("hideArea");

    // $("#kit1").removeClass("hideArea");
  }
});
