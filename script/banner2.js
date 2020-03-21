"use strict";
if (true) {
  $(document).ready(function() {
    const $bannerDiv = $(".hero__banner");
    const $text = $(".slideBox p");
    let currentArrEl = 0;
    $text.innerHTML = "<p>Wwwwa</p>";
    //lets
    let textArray = [
      "<p>Wesela</p>",
      "<p><span class='long'>Studniówki</span></p>",
      "<p>Imprezy</p>",
      "<p>Rocznice</p>",
      "<p>Urodziny</p>"
    ];

    //logo slider
    function chgSlide() {
      let slide = textArray[currentArrEl];
      $text.innerHTML = slide;
      currentArrEl++;
      if (currentArrEl > textArray.length - 1) {
        currentArrEl = 0;
      }
      show();
      setTimeout("chgSlide()", 5000);
      setTimeout("hide()", 4500);
      console.log("Current number is " + currentArrEl);
    }

    function show() {
      $text.fadeIn(500);
    }
    function hide() {
      $text.fadeOut(500);
    }
    chgSlide();
    //logo slider-end
  });
}
