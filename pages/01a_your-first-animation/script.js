gsap.to(".card", {
  opacity: 1,
  scale: 1,
  duration: 1,
  onComplete: () => {
    gsap.to(".card", {
      scale: 1,
      y: -190,
      repeat: -1,
      yoyo: true,
      duration: 1,
    });
  },
});
