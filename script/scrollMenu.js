// join two scripsts scroll, navpush to one OOP file
$(document).ready(function(){
    let $win = $(window);
    let $jumbo = $("#jumbo");
    let $banner = $('#banner');
    let ScrlPos = $banner.offset();
    let jumboH = $jumbo.height();
    let brkPoint = (jumboH * 0.04);
    // alert(jumboH);    
    $win.scroll(function(){
      if ($(window).innerWidth() >= 970){
        let ScrlCurrent = $banner.offset();
        if(ScrlCurrent.top > brkPoint){
          $banner.css("background", "grey");
          $banner.css("opacity", "0.9");
        } else{
          $banner.css("background", "none");
          $banner.css("opacity", "1");
        };
      };
    });
});


  