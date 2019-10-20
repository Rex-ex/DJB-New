//function to OOP  !!! REBUILD //click outside close nav
$(document).ready(function() {
  const sidenav = document.getElementById("mySidenav");
  // const main = document.getElementsByClassName("my-wrapper")[0];
  const main = document.getElementsByClassName("my-container--jumbo")[0];
  const btn = document.getElementById("bar_container");
  const $blacked = $("#blacked");

  let isOpen = false;
  btn.addEventListener("click", toogleNav, false);

  function toogleNav() {
    const subMenu = document.getElementsByClassName("changed")[0];
    if (subMenu) {
      closeNav();
    } else {
      openNav();
    }
  }

  function closeNav() {
    sidenav.style.width = "0";
    main.style.marginLeft = "0";
    btn.classList.remove("changed");
    // $blacked.toggle();
    $blacked.css("opacity", "0");
    isOpen = false;
  }

  function openNav() {
    sidenav.style.width = "250px";
    // main.style.marginLeft = "-250px";
    btn.classList.add("changed");
    // $blacked.toggle();
    $blacked.css("opacity", "0.8");
    isOpen = true;
  }
});
