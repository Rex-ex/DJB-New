// TO DO: rebuild waypoints, navpush to one OOP file !!
$(document).ready(function() {
  const $win = $(window);
  const $jumbo = $("#jumbo");
  const $mainNav = $("#mainNav");
  const jumboH = $jumbo.height();
  const brkPoint = jumboH * 0.04;
  let scrolling = false;

  $win.scroll(function() {
    scrolling = true;
  });

  setInterval(function() {
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
  }, 250);
});
