if (true) {
  $("html").addClass("isActiveJS");
  $(window).on("load", function() {
    const $preloaderDiv = $(".filters__preloader");
    const $filters = $(".filters");
    // $preloaderDiv.fadeOut();
    let fadeOut = setTimeout(function() {
      $preloaderDiv.fadeOut();
    }, 3000);
    // temporry solution | Promise?
    let disFilters = setTimeout(function() {
      $filters.css("display", "none");
    }, 3500);
  });
}
