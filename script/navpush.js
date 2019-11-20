//function to OOP, jQuery  !!! REBUILD //click outside close nav
$(document).ready(function() {
  const sidenav = document.getElementById("mySidenav");
  const main = document.getElementsByClassName("my-container--jumbo")[0];
  const btn = document.getElementById("bar_container");
  // ??
  const subMenu = document.getElementById("mySidenav__subMenu");
  const subMenuActive = document.getElementsByClassName(
    "mySidenav__subMenu--is-active"
  );
  // ??
  const $blacked = $(".filters__blacked");

  // let isOpen = false;
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
    // main.style.marginLeft = "0";
    btn.classList.remove("changed");
    subMenu.classList.remove("subMenu-isActive");
    $blacked.css("opacity", "0");
    // $blacked.css("width", "0");
    // isOpen = false;
  }

  function openNav() {
    sidenav.style.width = "250px";
    btn.classList.add("changed");
    subMenu.classList.add("subMenu-isActive");
    $blacked.css("opacity", "0.8");
    // $blacked.css("width", "100%");
    // isOpen = true;
  }
});
// temporary solution
// $(window).on("load", function() {
//   const btn = document.getElementById("bar_container");
//   setTimeout(function() {
//     btn.style.display = "block";
//   }, 3000);
// });
