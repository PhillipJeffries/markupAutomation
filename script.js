// import * as swiper from './swiper.js'
// import {swiper} from './index.js'; 



// console.log(document.querySelector('body'))

// import * as Swiper from "./swiper.js"

// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   direction: 'vertical',
//   loop: true,

//   // If we need pagination
//   pagination: {
//     el: '.swiper-pagination',
//   },

//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },

//   // And if we need scrollbar
//   scrollbar: {
//     el: '.swiper-scrollbar',
//   },
// });

console.log('ffg')


// const swiper = new Swiper('.swiper', {
//     // Optional parameters
//     direction: 'horizontal',
//     loop: true,

//     // wrapperClass: 'rr-swiper-wrapper',
//     // slideClass: 'rr-swiper-slide',
//         // wrapperClass: 'rr-swiper-wrapper',
//         // slideClass: 'rr-swiper-slide',
//         init: false,
//         updateOnWindowResize: true,
//         watchOverflow: true,
//         observer: true,
//         spaceBetween: 25,
  
//     // If we need pagination
//     pagination: {
//       el: '.swiper-pagination',
//     },
  
//     // Navigation arrows
//     navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev',
//     },
  
//     // And if we need scrollbar
//     scrollbar: {
//       el: '.swiper-scrollbar',
//     },
//   });


const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  slidesPerView: 3,
  slidesPerGroup: 1,

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  breakpoints: {
    1200: {
      slidesPerView: 3,
      slidesPerGroup: 1
    },
    768: {
      slidesPerView: 3,
      slidesPerGroup: 1
    },
    500: {
      slidesPerView: 2,
      slidesPerGroup: 1
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1
    }
  }
});




  console.log(swiper)
  


// function postRenderFn(widget) {
//     var rrSwiperCarousel = new SwiperModel({
//       widget: widget,
//       settingSwiper: {
//         wrapperClass: 'rr-swiper-wrapper',
//         slideClass: 'rr-swiper-slide',
//         init: false,
//         updateOnWindowResize: true,
//         watchOverflow: true,
//         observer: true,
//         spaceBetween: 25,
//         lazy: {
//           loadPrevNext: true,
//         },
//         on: {
//           slideChange: function () {

//           }
//         },
//         preloadImages: true,
//         touchReleaseOnEdges: true,
//         watchSlidesVisibility: true,
//         loop: true,
//         navigation: {
//           prevEl: widget.querySelector('.swiper-prev'),
//           nextEl: widget.querySelector('.swiper-next'),
//         },
//         pagination: {
//           el: widget.querySelector('.rr-slider-dots'),
//           type: 'bullets',
//           clickable: true
//         },
//         autoplay: false,
//         speed: 800,
//         breakpoints: {
//           1200: {
//             slidesPerView: 3,
//             slidesPerGroup: 3
//           },
//           768: {
//             slidesPerView: 3,
//             slidesPerGroup: 3
//           },
//           500: {
//             slidesPerView: 2,
//             slidesPerGroup: 2
//           },
//           320: {
//             slidesPerView: 1,
//             slidesPerGroup: 1
//           }
//         }
//       }
//     });
//     rrSwiperCarousel.getScript();
//   }


