const logoFigure = document.querySelector(".nav figure");

gsap.from(logoFigure, {
    y: -100,
    rotation: 90,
    duration: 2,
    autoAlpha: 0,
    delay: 2,
    repeat: -1,
    yoyo: true,
    ease: "power4.inOut",
});
