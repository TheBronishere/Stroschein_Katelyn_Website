gsap.registerPlugin(ScrollTrigger);

gsap.from('.space', {
    y: 400,
    duration: 2,
    opacity: 0,
    ease: "bounce.out",
    stagger: .15,
    scrollTrigger: {
        trigger: '.container-dishes',
        start: "top 80%",

    }
});
gsap.from('#image', {
    xPercent: -100,
    duration: 2.5,
    ease: "bounce.out",
    scrollTrigger: {
        trigger: ".image-anim",

    }
});
gsap.from('.container', {
    xPercent: 100,
    duration: 3.5,
    ease: "bounce.out",
    scrollTrigger: {
        trigger: ".text-back",

    }
});
gsap.from('.scale--aim', {
    scale: 400,
    duration: 2.5,
    scrollTrigger: {
        trigger: 'place-items-center',
    }
})