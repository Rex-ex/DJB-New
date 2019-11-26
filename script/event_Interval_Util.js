// build in progress
$(document).ready(function() {
  setInterval(function(injectEv) {
    if (scrolling) {
      scrolling = false;
      if ($win.innerWidth() >= 970) {
        let scrlCurrent = $mainNav.offset();
        if (scrlCurrent.top > brkPoint) {
          $main - nav.css("background", "grey");
          $mainNav.css("opacity", "0.9");
        } else {
          $mainNav.css("background", "none");
          $mainNav.css("opacity", "1");
        }
      }
    }
    return injectEv;
  }, 250);
});
