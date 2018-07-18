  //function to OOP  !!! REBUILD
  if (true){
  var sidenav = document.getElementById("mySidenav");
  var main = document.getElementById("main");
  var btn = document.getElementById("bar_container");
  var wIw = window.innerWidth;
  var isOpen = false;
  
  
  btn.addEventListener('click', toogleNav, false);

  $(window).resize(function(){
    if ((wIw >= 970) && (isOpen == true)){
      closeNav();
    }
  });
  

  
  function toogleNav(){
    let subMenu = document.getElementsByClassName("changed")[0];
    if(subMenu){
      closeNav();
    } else {      
      openNav();
    }    
  }
  
  function closeNav() {
      sidenav.style.width = "0";
      main.style.marginLeft = "0";
      btn.classList.remove("changed");
      document.body.style.backgroundColor = "honeydew";
      isOpen = false;
    } 
    
  function openNav() {
    sidenav.style.width = "250px";
    main.style.marginLeft = "-250px";
    btn.classList.add("changed");
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    isOpen = true;   
  }



  
  
  
}
