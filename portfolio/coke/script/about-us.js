$(function () {
  gsap.registerPlugin(ScrollTrigger);

  const brandstory = gsap.timeline({
    scrollTrigger: {
      trigger: ".brand-story",
      // markers: true,
      start: "top 0%", //trigger scroller(viewport)
      end: "bottom+=1500 0%",
      pin: true,

      scrub: 0.1, //사용자의 스크롤바를 따라잡기까지 1초
    },
  });
  // brandstory.to(".brand-story", { backgroundColor: "#f00", duration: 10 }, "=1");
  brandstory.from(".story-img", { x: -100, autoAlpha: 0, duration: 2 }, "");
  brandstory.from(".story-text-wrap", { x: -100, autoAlpha: 0 }, "-=1");
});
