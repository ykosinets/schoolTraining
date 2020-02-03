import $ from 'jquery';

window.$ = window.jQuery = $;
import "is-in-viewport";
import "slick-carousel/slick/slick";

class Slider {
  createContent = (slide) => {
    function createTabContent(tab){
      let tabId = tab.name + '-' + tab.id;

      return `<div class="tab-pane fade" id="${tabId}" role="tabpanel" aria-labelledby="${tab.name}-tab">
          <div class="tab-inner">
            <p class="prof-name m-0">${tab.name}</p>
            <p class="prof-ex-position m-0">${tab.positionEx}</p>
            <p class="prof-position text-primary m-0">${tab.position}}</p>
            <p class="prof-video-name mt-4">{{videoName}}</p>
            <p class="prof-video-description mt-1">{{videoDescription}}</p>
            <div class="flex flex-row mt-3">
              <div class="btn btn-sm btn-primary">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 40" class="play-triangle">
                  <path d="M28.47,17,5.79.69A3.66,3.66,0,0,0,0,3.68V36.32a3.66,3.66,0,0,0,5.79,3L28.47,23A3.67,3.67,0,0,0,28.47,17Z"></path>
                </svg>
                REPRODUCIR
              </div>
              <div class="btn btn-sm btn-outline-primary ml-3">MÁS INFO</div>
            </div>
          </div>
        </div>`;
    }

    function createNavPills(tab){
      let tabId = tab.name + '-' + tab.id;

      return `<li class="nav-item">
          <a class="nav-link active"
             data-toggle="tab"
             href="#${tabId}"
             aria-controls="${tab.name}"
             aria-selected="true">
            ${tab.name}
          </a>
        </li>`
    }

    function createBackground(slide){
      return `<div class="background">
          <a href="#" class="fs d-block position-absolute"></a>
          <video muted playsinline webkit-playsinline class="temp">
            <source src="${slide.video.url}" type="video/mp4">
          </video>
        </div>`;
    }

    $('.slider-container').append(createBackground(slide[id]));
    slide.tabs.map(tab => {
      $('.nav-pills').append(createNavPills(tab));
    });

    // let tabs = `<ul class="nav nav-pills" id="pills-tab" role="tablist">`;

    // slide.tabs.map((tab)=>{createBackground + createTabs});

    // return `<div class="tab-content" id="sliderTabContent">
    //   <div class="tab-pane tab-info fade show active" id="formacion" role="tabpanel"
    //        aria-labelledby="formacion-tab">
    //     <div class="tab-inner">
    //       <p class="prof-name m-0">${slide.name}</p>
    //       <p class="prof-ex-position m-0">${slide.positionEx}</p>
    //       <p class="prof-position text-primary m-0">${slide.position}</p>
    //       <p class="prof-video-name mt-4">${slide.video.name}</p>
    //       <p class="prof-video-description mt-1">${slide.video.description}</p>
    //       <div class="flex flex-row mt-3">
    //         <div class="btn btn-sm btn-primary">
    //           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 40" class="play-triangle">
    //             <path d="M28.47,17,5.79.69A3.66,3.66,0,0,0,0,3.68V36.32a3.66,3.66,0,0,0,5.79,3L28.47,23A3.67,3.67,0,0,0,28.47,17Z"></path>
    //           </svg>
    //           REPRODUCIR
    //         </div>
    //         <div class="btn btn-sm btn-outline-primary ml-3">MÁS INFO</div>
    //       </div>
    //     </div>
    //   </div>
    //
    //   <div class="tab-pane fade" id="escuela" role="tabpanel" aria-labelledby="escuela-tab">
    //     <div class="tab-inner">
    //       LA ESCUELA
    //     </div>
    //   </div>
    // </div>`;

    return createBackground() + createTabContent() + createNavPills();
  };

  render = (data) => {
    console.log(data);

    let createSlide = (slide) => {
      return `<div class="item" data-id="${slide.id}">
          <div class="ratio ratio-1x2">
            <div class="ratio-inner bg-cover"
                 style="background-image: url(${slide.image})">
              <a href="#" class="btn-play btn-play-xs">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 40" class="play-triangle">
                  <path
                    d="M28.47,17,5.79.69A3.66,3.66,0,0,0,0,3.68V36.32a3.66,3.66,0,0,0,5.79,3L28.47,23A3.67,3.67,0,0,0,28.47,17Z"/>
                </svg>
              </a>

              <div class="content">
                <p class="prof-name">${slide.name}</p>
                <p class="prof-ex-position">${slide.positionEx}</p>
                <p class="prof-position text-primary">${slide.position}</p>
              </div>

              <span class="expand">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0"
                     viewBox="0 0 240 240" xml:space="preserve">
                  <path id="Chevron_Right" d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179
                    l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816
                    C52.942,116.507,52.942,124.327,57.633,129.007z"/>
                </svg>
              </span>

              <video muted playsinline webkit-playsinline>
                <source src="${slide.video.url}" type="video/mp4">
              </video>
            </div>
          </div>
        </div>`;
    };

    data.slides.map((slide) => {
      $('.slider-profs').append(createSlide(slide));
    });

    Slider.createContent(data.slides[0]);
  };


  init = () => {
    const arrow = `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 240 240" xml:space="preserve"><path id="Chevron_Right" d="M57.633,129.007L165.93,237.268c4.752,4.74,12.451,4.74,17.215,0c4.752-4.74,4.752-12.439,0-17.179	l-99.707-99.671l99.695-99.671c4.752-4.74,4.752-12.439,0-17.191c-4.752-4.74-12.463-4.74-17.215,0L57.621,111.816 C52.942,116.507,52.942,124.327,57.633,129.007z"/></svg>`;
    let slider = {
      element: {
        profs: $('.slider-profs'),
      },

      options: {
        profs: {
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
        }
      }
    };

    slider.element.profs
      .on('init', function (slick) {
        let $sliderSection = $(slick.target).parents('section');

        let $contentSection = $sliderSection.find('.slider-container');
        let contentVideo = $contentSection.find('video')[0];
        let $close = $sliderSection.find('.slider-close');

        let $slides = $(slick.target).find('.slick-slide');
        let $items = $slides.find('.item');
        let $expand = $items.find('.expand');
        let $slidesVideo = $slides.find('video');
        let $arrows = $(slick.target).find('.slick-arrow');
        let timeout;

        $slidesVideo.on('ended', function () {
          let $this = $(this);
          let $slide = $this.parents('.slick-slide');
          if ($slide.hasClass('slide-hover')) {
            clearTimeout(timeout);
            $slide.removeClass('slide-over');
          }
        });

        $slides
          .on('mouseenter', function (e) {
            let $slide = $(this);
            $slide.addClass('slide-hover');
            $slide.prevAll().addClass('slide-prev');
            $slide.nextAll().addClass('slide-next');
            $slide.prev().addClass('slick-active');
            $slide.next().addClass('slick-active');

            if (!$sliderSection.hasClass('shown')) {
              $arrows.addClass('hidden');
            }

            setTimeout(function () {
              if ($slide.hasClass('slide-hover') && !$sliderSection.hasClass('shown')) {
                $slide.find('video')[0].play();
              }
            }, 700)
          })
          .on('mouseleave', function () {
            let $slide = $(this);
            let slideVideo = $slide.find('video')[0];
            clearTimeout(timeout);
            $slides.removeClass('slide-hover slide-prev slide-next');
            $arrows.removeClass('hidden');
            slideVideo.pause();

            setTimeout(function () {
              slideVideo.currentTime = 0;
            }, 150)
          })
          .on('mousemove', function (e) {
            let $slide = $(this);
            $slide.removeClass('slide-over');

            clearTimeout(timeout);
            timeout = setTimeout(function () {
              if (!$sliderSection.hasClass('shown') && $slide.hasClass('slide-hover')) {
                $slide.addClass('slide-over')
              }
            }, 500)
          });

        $expand.on('click', function (e) {
          e.stopPropagation();
          let $slide = $(this).parents('.slick-slide');
          $sliderSection.addClass('shown');
          $slide.addClass('slide-active').siblings().removeClass('slide-active slide-hover slide-prev slide-next');
          $arrows.removeClass('hidden');

          $('html, body').animate({
            scrollTop: $sliderSection.offset().top
          }, 500);

          contentVideo.currentTime = $slide.find('video')[0].currentTime;
          contentVideo.play();

          $(contentVideo)
            .on('play', function () {
              $(this).removeClass('temp');
            })
            .on('ended', function () {
              $(this).addClass('temp');
              setTimeout(function () {
                contentVideo.currentTime = 0;
                $(contentVideo).removeClass('temp');
              }, 500);
            })
        });

        $close.on('click', function () {
          $slides.removeClass('slide-hover');
          $sliderSection.removeClass('active shown');
          let slideVideo = $(this).parents('section').find('.slide-active video')[0];

          slideVideo.currentTime = contentVideo.currentTime;
        });
      })
      .on('afterChange', function (slick, currentSlide, currentIndex) {
        if ($(window).width() < 768) {
          let $slide = $(currentSlide.$slides.eq(currentIndex));
          let $sliderSection = $slide.parents('section');
          let $expand = $slide.find('.expand');

          if ($sliderSection.hasClass('shown')) {
            $expand.click();
            $slide.addClass('slide-active').siblings().removeClass('slide-active');
          }
        }
      });

    slider.element.profs.slick(slider.options.profs);
  };
}

export default Slider;
