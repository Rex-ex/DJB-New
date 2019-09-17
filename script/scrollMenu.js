// join two scripsts scroll, navpush to one OOP file
$(document).ready(function(){
  const $win = $(window);
  const $jumbo = $("#jumbo");
  const $banner = $('#banner');
  const jumboH = $jumbo.height();
  const brkPoint = (jumboH * 0.04);
  let scrolling = false;

  $win.scroll(function() {
    scrolling = true;
  });

  setInterval(function() {
    if (scrolling) {
      scrolling = false;
      if ($win.innerWidth() >= 970){
        let scrlCurrent = $banner.offset();
        if (scrlCurrent.top > brkPoint){
          $banner.css("background", "grey");
          $banner.css("opacity", "0.9");
        } else {
          $banner.css("background", "none");
          $banner.css("opacity", "1");
        };
      };
    };
  }, 250);
});
