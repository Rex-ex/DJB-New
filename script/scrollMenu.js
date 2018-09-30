$(document).ready(function(){
    let $win = $(window);
    let $jumbo = $("#jumbo");
    let $banner = $('#banner');
    let ScrlPos = $banner.offset();
    let jumboH = $jumbo.height();
    let brkPoint = (jumboH / 2);
    // alert(jumboH);    
    $win.scroll(function(){
      let ScrlCurrent = $banner.offset();
      if(ScrlCurrent.top > brkPoint){
        $banner.css("background", "grey");
      } else{
        $banner.css("background", "none");
      };
    });
});


  