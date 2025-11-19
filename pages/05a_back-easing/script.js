import gsap from "gsap";

const tabs = document.querySelectorAll(".tab");
const tabRow = document.querySelector(".tab-row");
const indicator = document.querySelector(".indicator");

const updateIndicator = (target) => {
  const tabBounds = target.getBoundingClientRect();
  const rowBounds = tabRow.getBoundingClientRect(); //where the clicked tab is in the row.

  const width = tabBounds.width;
  const offset = tabBounds.left - rowBounds.left;

  gsap.to(indicator, {
    x: offset,
    width: width,
    duration: 0.4,
    ease: "back.out(1.7)",
  });
};

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active")); //clearing the indicator class for all other tabs
    tab.classList.add("active");
    updateIndicator(tab);
  });
});

updateIndicator(document.querySelector(".tab.active")); //This is setting the indicator to the first element at every refresh.
