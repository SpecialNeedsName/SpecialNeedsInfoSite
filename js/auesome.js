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
  if ((hash = "#home")) {
    $("p").last().html("hello");
    console.log("hello");
  }
  if (hash == "#clothespin") {
    $("#clothespin").addClass("your_class");
    $("p").last().html("hi");
  }
  if (hash == "#spinner") {
    $("p").last().html("hi");
  }
  if (hash == "#match") {
    $("p").last().html("hi");
  }
  if (hash == "#flashcards") {
    $("p").last().html("hi");
  }
  if (hash == "#texture") {
    $("p").last().html("hi");
  }
  if (hash == "#threading") {
    $("p").last().html("hi");
  }
  if (hash == "#lego") {
    $("p").last().html("hi");
  }
  if (hash == "#zoob") {
    $("p").last().html("zoooob");
  }
  if (hash == "#contact") {
    $("p").last().html("hi");
  }
});
