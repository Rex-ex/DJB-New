  var sidenav = document.getElementById("mySidenav");
  var main = document.getElementById("main");
  var btn = document.getElementById("bar_container");
  var cls_btn = document.getElementById("mySidenav");

  function openNav() {
    sidenav.style.width = "250px";
    main.style.marginLeft = "-250px";
    btn.classList.add("changed");
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  }
  function closeNav() {
      sidenav.style.width = "0";
      main.style.marginLeft = "0";
      btn.classList.remove("changed");
      document.body.style.backgroundColor = "white";
  }

  btn.addEventListener('click', openNav, false);
  cls_btn.addEventListener('click', closeNav, false);
