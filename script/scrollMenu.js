$(document).ready(function(){
    var $win = $(window);
    var $jumbo = $("#jumbo");
    var $banner = $('#banner');
    var ScrlPos = $banner.offset();
    var jumboH = $jumbo.height();
    var brkPoint = (jumboH / 2);
    // alert(jumboH);    
    $win.scroll(function(){
      var ScrlCurrent = $banner.offset();
      if(ScrlCurrent.top > brkPoint){
        $banner.css("background", "grey");
      } else{
        $banner.css("background", "none");
      };
    });
});


  