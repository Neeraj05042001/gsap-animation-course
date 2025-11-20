import gsap from "gsap";

const showToastLoop = () => {
  gsap.to(".toast", {
    opacity: 1,
    y: -110,
    duration: 0.8,
    ease: "power4.out",
    scale: 1,
    onComplete: () => {
      gsap.to(".toast", {
        y: 100,
        delay: 2,
        duration: 0.7,
        ease: "power4.in",
        scale: 0.9,
        onComplete: () => {
          setTimeout(showToastLoop(), 2500);
        },
      });
    },
  });
};

showToastLoop();
