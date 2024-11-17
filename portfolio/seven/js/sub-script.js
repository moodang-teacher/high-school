$(function () {
    gsap.registerPlugin(ScrollTrigger);

    const titleTL = gsap.timeline();

    titleTL.from(".haapy", { y: -200, durtaion: 0.4, autoAlpha: 0 });
    titleTL.from(".haapy-title dt", { y: -200, autoAlpha: 0, durtaion: 0.4 });
    titleTL.from(".haapy-title dd", { y: -200, autoAlpha: 0, durtaion: 0.4 });

    const leftBox = gsap.utils.toArray(".hs-sec1");
    console.log(leftBox);
    leftBox.forEach((boxes) => {
        const tl = gsap.timeline({
            defaults: { x: -200, opacity: 0, duration: 0.4 },
            scrollTrigger: {
                trigger: boxes,
                // markers: true,
                start: "top 60%",
                end: "bottom top",
            },
        });

        tl.from(boxes.querySelector("h2"), {});
        tl.from(boxes.querySelector("figure img"), {}, "-=0.4");
        tl.from(boxes.querySelector("dl dt"), {}, "-=0.4");
        tl.from(boxes.querySelector("dl dd"), {}, "-=0.4");
    });

    const rhttBox = gsap.utils.toArray(".hs-sec2");
    console.log(leftBox);
    rhttBox.forEach((boxes) => {
        const tl = gsap.timeline({
            defaults: { x: 200, opacity: 0, duration: 0.4 },
            scrollTrigger: {
                trigger: boxes,
                // markers: true,
                start: "top 60%",
                end: "bottom top",
            },
        });

        tl.from(boxes.querySelector("h2"), {});
        tl.from(boxes.querySelector("figure img"), {}, "-=0.4");
        tl.from(boxes.querySelector("dl dt"), {}, "-=0.4");
        tl.from(boxes.querySelector("dl dd"), {}, "-=0.4");
    });
});
