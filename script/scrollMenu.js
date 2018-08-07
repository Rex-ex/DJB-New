$(document).ready(function(){
    var $win = $(window);
    var ScrlPos = $win.offset();
    var $banner = $('.banner');
    alert(ScrlPos.top);
    $win.scroll(function(){
      var ScrlCurrent = $win.offset();
      
      if(ScrlCurrent.top > ScrlPos.top){
        alert("It works!");
      };
    });
});


  