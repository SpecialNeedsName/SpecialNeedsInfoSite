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
    $("#body").html(
      "Welcome to the AUesome videos! These videos are for parents to work with their children on our various activities. Under the videos dropdown, you can view different activities that you can work on with your kits. Currently, we have around eight activities released and will be released based on your kit level and in the future. In your kit, you will have items that can correspond with the videos. These vidoes can be watched by parents to work on developing you cognivite skills."
    );
  }
  if (hash == "#clothespin") {
    $("#title").text("Clothespin Activity");
    $("#body").html("In this activity, we will be using our clothespins.");
  }
  if (hash == "#spinner") {
    $("#title").text("Spinner Activity");
    $("#body").html("In this activity, we will be using our spinners.");
  }
  if (hash == "#match") {
    $("#title").text("Match Me!");
    $("#body").html("In this activity, we will be using our match me cards.");
  }
  if (hash == "#flashcards") {
    $("#title").text("Emotions Flashcards");
    $("#body").html(
      "In this activity, we will be using our emotion flashcards."
    );
  }
  if (hash == "#texture") {
    $("#title").text("Texture Identification");
    $("#body").html(
      "In this activity, we will be doing texture identification."
    );
  }
  if (hash == "#threading") {
    $("#title").text("Threading Activity");
    $("#body").html("In this activity, we will be using threading kit.");
  }
  if (hash == "#lego") {
    $("#title").text("Lego Building");
    $("#body").html("In this activity, we will be using our legos.");
  }
  if (hash == "#zoob") {
    $("#title").text("ZOOB Building");
    $("#body").html("In this activity, we will be using our zoob blocks.");
  }
  if (hash == "#contact") {
    $("#title").text("Contact");
    $("#body").html(
      "Contact us at aueosme.co@gmail.com or hi.anshulg@gmail.com for any improvements!"
    );
  }
});
