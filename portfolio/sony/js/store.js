$(function () {
    const tl = gsap.timeline();

    tl.from(".main-banner", { autoAlpha: 0 });
    //visual
    // tl.from(".categorise-list li", { y: 30, autoAlpha: 0, stagger: 0.25 }, ">");

    // tl.from(".hot-products li", { y: 30, autoAlpha: 0, stagger: 0.1 });
    // tl.from(".promotion-info", { y: 30, autoAlpha: 0, stagger: 0.1 });
    tl.from(".service-list li", { y: 30, autoAlpha: 0, stagger: 0.25 }, ">");

    const categoriseTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".categorise-list",
            // markers: true,
            start: "top 40%",
            end: "bottom 30%",
            // pin: true,

            // scrub: 1, // 사용자의 스크로바를 따라잡기까지 1초
        },
    });

    categoriseTL.from(".categorise-list li ", {
        y: 30,
        autoAlpha: 0,
        stagger: 0.1,
    });

    const productTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".hot-products",
            // markers: true,
            start: "top 70%",
            end: "bottom 50%",
            // pin: true,

            scrub: 1, // 사용자의 스크로바를 따라잡기까지 1초
        },
    });

    productTL.from(".hot-products li ", {
        y: 30,
        autoAlpha: 0,
        stagger: 0.1,
    });

    const promotionTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".promotion",
            // markers: true,
            start: "top 70%",
            end: "bottom 0%",
            // pin: true,

            // scrub: 1, // 사용자의 스크로바를 따라잡기까지 1초
        },
    });

    promotionTL.from(".promotion-info ", {
        y: 50,
        autoAlpha: 0,
    });

    const mapTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".map",
            // markers: true,
            start: "top 80%",
            end: "bottom 20%",

            scrub: 1, // 사용자의 스크로바를 따라잡기까지 1초
        },
    });

    mapTL.from(".map ", {
        x: 50,
        autoAlpha: 0,
    });

    const supportConTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".support-con",
            // markers: true,
            start: "top 80%",
            end: "bottom 20%",

            scrub: 1, // 사용자의 스크로바를 따라잡기까지 1초
        },
    });

    supportConTL.from(".service-list", {
        y: 50,
        autoAlpha: 0,
        stagger: 0.25,
    });
});
