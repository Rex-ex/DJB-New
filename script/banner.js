"use strict";
if (true) {
  $(document).ready(function() {
    // $(window).on("load", function() {
    const $bannerDiv = $(".hero__banner");
    const $text = $(".hero__banner p");
    const $textArray = [...$text];
    let currentArrEl = 0;
    const delay = amount => {
      return new Promise(resolve => {
        setTimeout(resolve, amount);
      });
    };

    let loop = async function() {
      for (let i = 0; i < $textArray.length; i++) {
        $textArray[i].style.display = "inline";
        if (i > 0) {
          $textArray[i - 1].style.display = "none";
        }
        if (i == 0) {
          $textArray[$textArray.length - 1].style.display = "none";
        }
        await delay(3000); //equal to anime.css animation time - slow, slowe etc.
        if (i == $textArray.length - 1) {
          i = -1;
        }
      }
    };
    loop();
  });
}
