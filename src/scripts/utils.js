import $ from 'jquery';
window.$ = window.jQuery = $;

//----------------------------------------------------------
//helpers---------------------------------------------------
$.fn.isInViewport = function (part) {
  part = part || 1;
  let elementTop = $(this).offset().top;
  let elementBottom = elementTop + $(this).outerHeight() * part;
  let viewportTop = $(window).scrollTop();
  let viewportBottom = viewportTop + $(window).height() * part;

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

$.fn.hasScrollBar = function () {
  return window.innerWidth - this[0].clientWidth > 0
};

$(document).ready(function () {
  let $body = $('body');

  if ($body.hasScrollBar()) {
    $body.addClass('scrollable');
  }
});
