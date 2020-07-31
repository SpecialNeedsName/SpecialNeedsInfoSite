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

$(window).on("hashchange", function () {
  hash = window.location.hash;
  console.log(hash);
  if (hash == "#home") {
    console.log("works");
    $("#title").text("AUesome Videos");
  }
  if (hash == "#clothespin") {
    $("#title").text("Clothespin Activity");
  }
  if (hash == "#spinner") {
    $("#title").text("Spinner Activity");
  }
  if (hash == "#match") {
    $("#title").text("Match Me!");
    $("p").last().html("hi");
  }
  if (hash == "#flashcards") {
    $("#title").text("Emotions Flashcards");
  }
  if (hash == "#texture") {
    $("#title").text("Texture Identification");
  }
  if (hash == "#threading") {
    $("#title").text("Threading Activity");
  }
  if (hash == "#lego") {
    $("#title").text("Lego Building");
  }
  if (hash == "#zoob") {
    $("#title").text("ZOOB Building");
  }
  if (hash == "#contact") {
    $("#title").text("Contact");
  }
});
