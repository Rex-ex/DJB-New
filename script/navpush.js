//function to OOP  !!! REBUILD //click outside close nav
$(document).ready(function() {
  const sidenav = document.getElementById("mySidenav");
  // const main = document.getElementsByClassName("my-wrapper")[0];
  const main = document.getElementsByClassName("my-container--jumbo")[0];
  const btn = document.getElementById("bar_container");
  const subMenu = document.getElementById("mySidenav__subMenu");
  const subMenuActive = document.getElementsByClassName(
    "mySidenav__subMenu--is-active"
  );
  const $blacked = $("#blacked");

  let isOpen = false;
  btn.addEventListener("click", toogleNav, false);

  function toogleNav() {
    const buttonMenu = document.getElementsByClassName("changed")[0];
    if (buttonMenu) {
      closeNav();
    } else {
      openNav();
    }
  }

  function closeNav() {
    sidenav.style.width = "0";
    main.style.marginLeft = "0";
    btn.classList.remove("changed");
    subMenu.classList.remove("subMenu-isActive");
    // $blacked.toggle();
    $blacked.css("opacity", "0");
    isOpen = false;
  }

  function openNav() {
    sidenav.style.width = "250px";
    // main.style.marginLeft = "-250px";
    btn.classList.add("changed");
    subMenu.classList.add("subMenu-isActive");
    // $blacked.toggle();
    $blacked.css("opacity", "0.8");
    isOpen = true;
  }
});
