$(function () {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline();

    //header
    tl.from(".logo", { y: -100, autoAlpha: 0 });
    tl.from(".gnb li > a", { y: -50, autoAlpha: 0, stagger: 0.1 }, ">");
    tl.from(".util-menu a", { y: -100, autoAlpha: 0, stagger: 0.2 }, ">");

    gsap.to(".visual", {
        scrollTrigger: {
            trigger: ".scroll-con",
            // markers: true,
            start: "bottom 0%",
            scrub: 1,
        },

        autoAlpha: 0,
        duration: 1,
    });

    //pick
    gsap.from(".pick-slider", {
        autoAlpha: 0,
        x: 50,
        // duration: 2,

        scrollTrigger: {
            trigger: ".pick",
            // markers: true,
            start: "top 20%",
            end: "bottom 0%",
            // pin: true,
            // scrub: 1,
        },
    });

    //news
    gsap.from(".news-slider .swiper-slide", {
        autoAlpha: 0,
        y: 50,
        stagger: 0.3,
        scrollTrigger: {
            trigger: ".news",
            // markers: true,
            start: "top 20%",
            end: "bottom 0%",
            // pin: true,
            // scrub: 1,
            // toggleActions: "play none reverse none",
        },
    });

    // //service
    // gsap.from(".ri-arrow-right-line", {
    //     autoAlpha: 0,
    //     x: -50,

    //     scrollTrigger: {
    //         trigger: ".service",
    //         // markers: true,
    //         start: "top 40%",
    //         end: "top 0%",
    //         // toggleActions: "play none reverse none",
    //     },
    // });
});
