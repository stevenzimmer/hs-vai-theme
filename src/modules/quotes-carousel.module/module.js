const swiper = new Swiper('.quote-swiper', {
  speed: 300,
  spaceBetween: 20,
  loop: true,
  grabCursor: true,
  perMove:1,
  autoPlay: {
    delay:3000
  },
  centerSlides: true,
  // snapOnRelease: true,
  // sticky:true,
  pagination:{
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    enabled: true,
    nextEl: '.btn-next',
    prevEl: '.btn-prev',
  },
  breakpoints: {
    
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 10
    },
    767: {
      slidesPerView: 1.1,
      spaceBetween: 20
    }
  }
});