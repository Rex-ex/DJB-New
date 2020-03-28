if (true) {
  $("html").addClass("isActiveJS");
  // const $filters = $(".filters");
  // const $nav = $(".mainNav");
  // const $hero = $(".hero");
  // const $menu = $(".bar_container");
  // const $flags = $(".flags__container");
  // $nav.fadeOut();
  // $hero.fadeOut();
  // $menu.fadeOut();
  // $flags.fadeOut();
  $(window).on("load", function() {
    const $preloaderDiv = $(".filters__preloader");
    const $filters = $(".filters");
    // let fadeOut = setTimeout(function() {
    // $preloaderDiv.fadeOut();
    // }, 3000);
    let hidePreloader = setTimeout(function() {
      $preloaderDiv.fadeOut();
      $preloaderDiv.css("display", "none");
    }, 500);
    // temporry solution | Promise?
    // let disFilters = setTimeout(function() {
    // $preloaderDiv.css("display", "none");
    // }, 3500);
    // const $preloaderDiv = $(".filters__preloader");
    // const $filters = $(".filters");
    // const $nav = $(".mainNav");
    // const $hero = $(".hero");
    // const $menu = $(".bar_container");
    // const $flags = $(".flags__container");
    // const $hamburger = $("nav");
    // $preloaderDiv.fadeOut();
    // $nav.fadeOut();
    // $hero.fadeOut();
    // $menu.fadeOut();
    // $flags.fadeOut();
    // $hamburger.fadeOut();
  });
}
