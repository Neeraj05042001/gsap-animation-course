import gsap from "gsap";

const btn = document.querySelector(".repeat");

const animation = gsap.from(".card", {
  y: 60,
  opacity: 0,
  duration: 0.8,
  delay: 0.6,
  scale: 0.9,
  ease: "power4.out",
  stagger: 0.2,
});

btn.addEventListener("click", () => {
  animation.restart();
});
