import gsap from "gsap";

const button = document.querySelector(".scroll-to-top");
const isFloating = false;
window.addEventListener("scroll", () => {
  if (scrollY > 200) {
    button.classList.add("show");

    if (!isFloating) {
      gsap.to(button, {
        y: -20,
        repeat: -1,
        yoyo: true,
        ease: "sine.out",
        duration: 1.5,
      });
      isFloating = false;
    }
  } else {
    button.classList.remove("show");
  }
});

button.addEventListener("mouseenter", () => {
  gsap.to(button, {
    scale: 1.2,
    duration: 0.2,
  });
});
button.addEventListener("mouseleave", () => {
  gsap.to(button, {
    scale: 1,
    duration: 0.2,
  });
});

button.addEventListener("click", () => {
  window.scrollTo(0, 0);
});
