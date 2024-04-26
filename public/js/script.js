gsap.to(".hero-brand", {
  scale: 1,
  x: 0,
  y: -150,
  duration: 1.5,
  ease: "none",
  scrollTrigger: {
    trigger: "#hero-section",
    toggleActions: "play reverse play reverse",
    start: "bottom 90%",
    end: "bottom 0%",
    scrub: true,
  },
});

gsap.to(".hero-thumbnail", {
  x: 0,
  y: -250,
  duration: 1.5,
  ease: "none",
  scrollTrigger: {
    trigger: "#hero-section",
    toggleActions: "play reverse play reverse",
    start: "bottom 90%",
    end: "bottom 10%",
    scrub: true,
  },
});

gsap.to(".decor", {
  x: 0,
  y: -70,
  rotate: "50deg",
  duration: 1.5,
  ease: "none",
  scrollTrigger: {
    trigger: "#hero-section",
    toggleActions: "play reverse play reverse",
    start: "bottom 90%",
    end: "bottom 10%",
    scrub: true,
  },
});

gsap.to(".decor-about", {
  x: 0,
  y: -70,
  rotate: "70deg",
  duration: 1.5,
  ease: "none",
  scrollTrigger: {
    trigger: "#about",
    toggleActions: "play reverse play reverse",
    start: "top 100%",
    end: "top -100%",
    scrub: true,
  },
});

gsap.to(".decor-facilities", {
  x: 0,
  y: -70,
  rotate: "70deg",
  duration: 1.5,
  ease: "none",
  scrollTrigger: {
    trigger: "#facilities",
    toggleActions: "play reverse play reverse",
    start: "top 100%",
    end: "top -100%",
    scrub: true,
  },
});
