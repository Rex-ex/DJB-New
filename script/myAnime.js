if (true) {
  $("html").addClass("isActiveJS");
  // do only is JS avalible / work in progress
  $(window).on("load", function() {
    const $preloaderDiv = $(".filters__preloader");
    const $filters = $(".filters");
    const $nav = $(".mainNav");
    const $hero = $(".hero");
    // $preloaderDiv.fadeOut();
    $nav.fadeOut();
    $hero.fadeOut();
    let fadeOut = setTimeout(function() {
      $preloaderDiv.fadeOut();
    }, 3000);
    let animStart = setTimeout(function() {
      doAnimeEvent();
    }, 3001);
  });

  function doAnimeEvent() {
    const animStrips = ".anime__container span";
    const animeContainer = ".anime__container";
    const $nav = $(".mainNav");
    const $hero = $(".hero");
    let tl = anime.timeline({
      easing: "easeOutExpo",
      duration: 750
    });

    tl.add({
      targets: animStrips,
      width: "100%",
      backgroundColor: "rgba(0, 120, 180, 1)",
      delay: anime.stagger(100) // increase delay by 100ms for each elements.
    })
      .add({
        targets: animStrips,
        width: "90%",
        backgroundColor: "rgba(0, 120, 180, 0.2)"
      })
      .add({
        targets: animeContainer,
        scaleY: "2",
        scaleX: "2",
        translateX: "40%",
        rotate: "45deg",
        duration: 5000
      });
    let showElements = setTimeout(function() {
      $nav.fadeIn();
      $hero.fadeIn();
    }, 4000);
  }
}
