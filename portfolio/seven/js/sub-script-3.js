$(function () {
    gsap.registerPlugin(ScrollTrigger);

    // start
    const navTL = gsap.timeline();

    navTL.from("h1", { y: -200, durtaion: 0.2, autoAlpha: 0 });
    navTL.from(".header-right", { y: -200, durtaion: 0.2, autoAlpha: 0, stagger: 0.2 }, "-=0.7");
    navTL.from("nav ul li", { y: -200, durtaion: 0.4, autoAlpha: 0, stagger: 0.2 });
    navTL.from(".beran-story-sec dl dt", {
        delay: 0.5,
        autoAlpha: 0,
        y: -100,
    });
    navTL.from(".beran-story-sec dl dd", {
        autoAlpha: 0,
        y: -100,
    });

    navTL.from(".beran-story-img", {
        scrub: true,
    });

    const brandTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".beran-story-sec2",
            // markers: true,
            start: "70% 50%",
            end: "bottom 50%",
            scrub: 1,
        },
    });

    brandTL.from(".beran-story-sec2 dl dt", { autoAlpha: 0, y: -100 });
    brandTL.from(".beran-story-sec2 dl dd", { autoAlpha: 0, y: -100 });

    const expTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".exp-title",
            // markers: true,
            start: "top 50%",
            end: "bottom top",
        },
    });

    expTL.from(".exp-title", {
        durtaion: 1,
        autoAlpha: 0,
        y: -200,
    });

    // gsap.from(".exp-bg",{y: -200, duration: 1, autoAlpha:1})

    const leftBox = gsap.utils.toArray(".exp-bg1");
    console.log(leftBox);
    leftBox.forEach((boxes) => {
        const expSecTL = gsap.timeline({
            defaults: { x: -200, duration: 0.2, opacity: 0 },
            scrollTrigger: {
                trigger: boxes,
                // markers: true,
                start: "top 60%",
                end: "60% top",
                // scrub: 1
            },
        });

        expSecTL.from(boxes.querySelector(".exp-con1"), {});
    });

    const rhtTBox = gsap.utils.toArray(".exp-bg2");
    console.log(rhtTBox);
    rhtTBox.forEach((boxes) => {
        const expSecTL2 = gsap.timeline({
            defaults: { x: 200, duration: 0.2, opacity: 0 },
            scrollTrigger: {
                trigger: boxes,
                //markers: true,
                start: "60% 60%",
                end: "60% top",
                // scrub: 1
            },
        });

        expSecTL2.from(boxes.querySelector(".exp-con2"), {});
    });

    const ecTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".economy",
            // markers: true,
            start: "top 50%",
            end: "50% 50%",
        },
    });

    ecTL.from(".economy h2", { durtaion: 1, autoAlpha: 0, y: -200 });
    ecTL.from(".economy-con", { durtaion: 1, autoAlpha: 0, y: -200, stagger: 0.3 });

    const vluTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".value",
            // markers: true,
            start: "top 20%",
            end: "10% top",
            scrub: true,
            pin: true,
        },
    });

    vluTL.from(".value", { scale: 0.9, autoAlpha: 0, duration: 10 });

    const vluconTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".value-con",
            // markers: true,
            start: "90% 50%",
            end: "bottom 30%",
            scrub: true,
        },
    });

    vluconTL.to(".value-con h2", { autoAlpha: 1 });
    vluconTL.from(".biss-con", { x: 500, autoAlpha: 0, duration: 3 });
    vluconTL.from(".sp-time", { x: 500, autoAlpha: 0, duration: 3 });
    vluconTL.from(".creation-con", { x: -500, autoAlpha: 0, duration: 3 });

    const grenTL = gsap.timeline({
        scrollTrigger: {
            trigger: ".orang ",
            // markers: true,
            start: "top 50%",
            end: "bottom top",
        },
    });

    grenTL.from(".orang h2", { y: 300, autoAlpha: 0 });
    grenTL.from(".beobeul", { y: 200, autoAlpha: 0, stagger: 0.1 });

    const grenSec = gsap.timeline({
        scrollTrigger: {
            trigger: ".gren-sec",
            // markers: true,
            start: "top 50%",
            end: "bottom top",
        },
    });

    grenSec.from(".gren-sec dl dt", { y: 200, autoAlpha: 0, duration: 0.5 });
    grenSec.from(".gren-sec dl dd", { y: 200, autoAlpha: 0, duration: 0.5 });
    grenSec.from(".more", { y: 200, autoAlpha: 0, duration: 0.5 });
    grenSec.from(".person", { autoAlpha: 0, duration: 0.5 });

    gsap.from(".gren-sec2 p", {
        y: 200,
        autoAlpha: 0,
        scrollTrigger: {
            trigger: ".gren-sec2",
            // markers: true,
            start: "top 50%",
            end: "bottom top",
        },
    });
});
