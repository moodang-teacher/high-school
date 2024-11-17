var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  // centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 3000,
  },
  mouseheel: false,

  breakpoints: {
    440: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
    },
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const tl = gsap.timeline();

tl.from(".coca", { x: -1000, duration: 1 });
tl.from(".cola", { x: 1000, duration: 1 });
