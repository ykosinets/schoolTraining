import $ from "jquery";
import "./utils";

export default function heroInit() {
  let $hero = $('.section-hero');
  let heroVideo = $hero.find('video')[0];
  let $background = $hero.find('.background');

  $(window).scroll(function () {
    $(heroVideo).each(function () {
      if ($(this).is(":in-viewport(" + $background.height() + ")")) {
        $(this)[0].play();
      } else {
        $(this)[0].pause();
      }
    });
  });

  $(heroVideo).on('play', function () {
    $background.removeClass('active pause ended');
    $background.addClass('play');
  });
  $(heroVideo).on('pause', function () {
    $background.addClass('active play ended');
    $background.addClass('pause');
  });
  $(heroVideo).on('ended', function () {
    $background.addClass('ended');
  });
}
