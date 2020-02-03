import '../stylesheets/style.scss';
import $ from 'jquery';
window.$ = window.jQuery = $;
import "bootstrap/js/dist/tab";
import Slider from "./slider";
import heroInit from "./hero";

$.ajax({
  url: "../static/data.json",
})
  .done(function (data) {
    if (data) {
      let profSlider = new Slider;
      profSlider.render(data);
      profSlider.init();
    }
  });

heroInit();
