// import Swiper from 'swiper';

var mySwiper = new Swiper('.swiper-container', {
  // Optional parameter
  direction: 'horizontal',
  slidesPerView: 2,
  spaceBetween: 400,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 150,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 276,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 400,
    },
  },
});

const SwiperBackground = new Swiper('.swiper-container-background', {
  // Optional parameter
  effect: 'fade',
  direction: 'horizontal',
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
    },
  },
});

mySwiper.on('slideNextTransitionStart', function () {
  SwiperBackground.slideNext(500, false);
});
mySwiper.on('slidePrevTransitionStart', function () {
  SwiperBackground.slidePrev(500, false);
});
