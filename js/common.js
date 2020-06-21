$(document).ready(function () {

  var audio = new Audio("../images/hover.mp3");

  function playAudio() {
    audio.play();
  }



  new JParticles.particle('#meteor', {
    range: 1,
    num: 0.04,
    maxSpeed: 0.05,
    maxR: 1.2,
    color: "#89b439"
  });

  //

  if ($('.noise').length > 0) {
    noise();
  }



  //






  /* show - hide */


  $(".hamburger").on('click', function () {

    playAudio();

    let choiseElHumburger = $(".main-section-center, .main-menu, .hamburger");

    let navLi = $(".main-menu li");

    let nullTime = 0.75;
    let stemTime = 0.05;

    if ($(this).hasClass("active")) {
      choiseElHumburger.removeClass("active");
      navLi.removeAttr("style");
    } else {
      choiseElHumburger.addClass("active");
      navLi.each(function () {
        nullTime = nullTime + stemTime;
        $(this).css("transition-delay", nullTime + "s");
      });
    }
  });



  /* show - hide */
});