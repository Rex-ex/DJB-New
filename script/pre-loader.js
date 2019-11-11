if (true) {
  $("html").addClass("isActiveJS");
  $(window).on("load", function() {
    const $preloaderDiv = $(".filters__preloader");
    // $preloaderDiv.fadeOut();
    setTimeout(function() {
      $preloaderDiv.fadeOut();
    }, 3000);
  });
}
