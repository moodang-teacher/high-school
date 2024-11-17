document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    spaceBetween: 30,

    breakpoints: {
      440: {
        slidesPerView: 1.1,
        spaceBetween: 10,
      },
      1024: {
        slidesPerView: "auto",
        spaceBetween: 20,
      },
    },
  });
});

$(function () {
  gsap.registerPlugin(ScrollTrigger);

  // item을 선택자 또는 요소로 정의
  let item = $(".text-wrap1"); // 예: .text-con-wrap 내부의 요소에 애니메이션 적용

  gsap.from(item, {
    x: -500,
    autoAlpha: 0,
    // delay: 1,

    scrollTrigger: {
      trigger: ".text-wrap1",
      // markers: true,
      id: ".text-wrap1",
      start: "top 40%",
      end: "bottom 20%",

      // toggleActions: "play none reverse none",
    },
  });

  gsap.registerPlugin(ScrollTrigger);

  // item을 선택자 또는 요소로 정의
  let item2 = $(".text-wrap2"); // 예: .text-con-wrap 내부의 요소에 애니메이션 적용

  gsap.from(item2, {
    x: 500,
    autoAlpha: 0,
    // delay: 1,

    scrollTrigger: {
      trigger: ".text-wrap2",
      // markers: true,
      id: ".text-wrap2",
      start: "top 40%",
      end: "bottom 20%",

      // toggleActions: "play none reverse none",
    },
  });

  gsap.registerPlugin(ScrollTrigger);

  // item을 선택자 또는 요소로 정의
  let item3 = $(".text-wrap3"); // 예: .text-con-wrap 내부의 요소에 애니메이션 적용

  gsap.from(item3, {
    x: -500,
    autoAlpha: 0,
    // delay: 1,

    scrollTrigger: {
      trigger: ".text-wrap3",
      // markers: true,
      id: ".text-wrap3",
      start: "top 40%",
      end: "bottom 20%",

      // toggleActions: "play none reverse none",
    },
  });

  let swiper1 = $(".con-list-wrap1");

  gsap.from(swiper1, {
    y: -100,
    autoAlpha: 0,
    // delay: 0.3,
    duration: 0.4,

    scrollTrigger: {
      trigger: ".con-list-wrap1",
      // markers: true,
      id: ".con-list-wrap1",
      start: "top 40%",
      end: "bottom -50%",

      // toggleActions: "play none reverse none",
    },
  });

  let swiper2 = $(".con-list-wrap2");

  gsap.from(swiper2, {
    y: -100,
    autoAlpha: 0,
    // delay: 0.3,
    duration: 0.4,

    scrollTrigger: {
      trigger: ".con-list-wrap2",
      // markers: true,
      id: ".con-list-wrap2",
      start: "top 40%",
      end: "bottom -50%",

      // toggleActions: "play none reverse none",
    },
  });

  let swiper3 = $(".con-list-wrap3");

  gsap.from(swiper3, {
    y: -100,
    autoAlpha: 0,
    // delay: 0.3,
    duration: 0.4,

    scrollTrigger: {
      trigger: ".con-list-wrap3",
      // markers: true,
      id: ".con-list-wrap1",
      start: "top 40%",
      end: "bottom -50%",

      // toggleActions: "play none reverse none",
    },
  });

  let progtx = $(".progress-text-wrap");

  gsap.from(progtx, {
    y: -100,
    autoAlpha: 0,
    duration: 0.4,

    scrollTrigger: {
      trigger: ".progress-text-wrap",
      // markers: true,
      id: ".progress-text-wrap",
      start: "top 100%",
      end: "bottom -50%",

      // toggleActions: "play none reverse none",
    },
  });
});
