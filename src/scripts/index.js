import '../stylesheets/style.scss';
import $ from 'jquery';

window.$ = window.jQuery = $;
import "bootstrap/js/dist/tab";
import "bootstrap/js/dist/collapse";
import Slider from "./slider";
import heroInit from "./hero";

const arrow = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 240 240" xml:space="preserve"><path id="Chevron_Right" d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179	l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816 C52.942,116.507,52.942,124.327,57.633,129.007z"/></svg>`;

$.ajax({
  url: "../static/data/profSlider.json",
})
  .done(function (data) {
    if (data) {

      let profSlider = new Slider($('.section-profs'), {
        swipe: false,
        initialSlide: 0,
        focusOnSelect: false,
        infinite: true,
        centerMode: false,
        centerPadding: 0,
        autoplay: false,
        variableWidth: true,
        prevArrow: '<button class="slick-prev slick-arrow">' + arrow + '</button>',
        nextArrow: '<button class="slick-next slick-arrow">' + arrow + '</button>',
        responsive: [
          {
            breakpoint: 991,
            settings: {}
          },
          {
            breakpoint: 480,
            settings: {}
          }
        ]
      });
      profSlider.init(data);
    }
  });

$.ajax({
  url: "../static/data/newsSlider.json",
})
  .done(function (data) {
    if (data) {
      let tilesSlider = new Slider($('.section-news'), {
        swipe: false,
        initialSlide: 0,
        focusOnSelect: false,
        infinite: true,
        centerMode: false,
        centerPadding: 0,
        autoplay: false,
        variableWidth: true,
        prevArrow: '<button class="slick-prev slick-arrow">' + arrow + '</button>',
        nextArrow: '<button class="slick-next slick-arrow">' + arrow + '</button>',
      });
      tilesSlider.init(data);
    }
  });

heroInit();
