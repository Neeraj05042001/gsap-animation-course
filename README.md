# Ultimate GSAP Workshop Starter

To use GSAP into our project first head to the GSAP site and take the cdn link and copy in the html file above js script file

**LINK:** <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>

## Day-01: Introduction

For the first time we will see how to use the gsap and see its magic, for this we will include gsap into our project through CDN link and write simple code to see its magic.

`CDN link: <script src="https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js"></script>

Include this link into the `html file` and start writing the gsap code into `js` file:

```js
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

//This code will show the basic implementation of the gsap and how it brings things to life.
```

## Day-02:

Since you have used gsap using `CDN`, it's not preferred to be using using `CDN` as we it lack in some features that are actually helpful in vscode during our coding journey such as the `property intellisence` that gives us suggestions which propery to use.

We will be using `GSAP` by installing it into our project:

- npm install gsap
- to use it anywhere, import the gsap into the file firt and then start writting the code.

### Understanding The Properties

```js
gsap.to(".card", {
  X: 200, //This sets the position of the item from the origin, it can be in both x and y and both - and +.
  opacity: 1, //This property defines the visibility of the item it ranges from 0 to 1.
  rotation: 360, // This makes an item rotate on its axis, it ranges from 0 to 360.
  background: "#ff6f61", //This is to set the color to the item
  borderRadius: "50%", //This set the border radius of the item
  scale: 1.25, //This sets the size of the item how big or small it appears, it also has property such as `scaleX` and `ScaleY` property that sets size in particular direction of X and Y.
  duration: 5, //This determines for how many seconds the animations will happen
  delay: 2, // It delays the animation and make wait for the time untill the animation starts.
  ease: "powerin.Out", //it control how these different propertise change with time, there are many other properties of ease based on use cases.
  repeat: 2, //this sets how many time the animation is to be repeated, to set infinte put the value to -1.
  yoyo: true, //It will reverse the animation on every alternate repeat
  repeatDelay: 1, //It sets the delay time between the repetation of the animation.
  paused: true, //It pauses the animation
  stagger: 1, //It is used to make group of items animate one after another
});
```

## Day-03: Understanding Methods

There are a lot of methods that can be used to control the behaviour of the animation such as `play`, `pause`, `resume`, `restart`, `reverse`, `kill`, `yoyo` etc.

**Example:**

```js
import gsap from "gsap";

const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const resume = document.querySelector(".resume");
const restart = document.querySelector(".restart");
const reverse = document.querySelector(".reverse");
const kill = document.querySelector(".kill");
const yoyo = document.querySelector(".yoyo");

const animation = gsap.to(".box", {
  opacity: 1,
  rotation: 360,
  borderRadius: "50%",
  duration: 2,
  scale: 1.02,
  repeat: -1,
  yoyo: true,
});

play.addEventListener("click", () => {
  animation.play();
});

pause.addEventListener("click", () => {
  animation.pause();
});

resume.addEventListener("click", () => {
  animation.resume();
});

restart.addEventListener("click", () => {
  animation.restart();
});

reverse.addEventListener("click", () => {
  animation.reverse();
});

kill.addEventListener("click", () => {
  animation.kill();
});
yoyo.addEventListener("click", () => {
  animation.yoyo();
});
```

## Day 3: Easing

When you animate something you are not just saying move from `A` to `B`, you also decides `how it moves`.

- should it start slow and zip out.
- should it bounce back when finishes.
- should it ease into place as guided by gravity
- or it should just fly-by

That's where easing functions come in and we are going to study that now.

### To learn this we will be doing a basic animation

- create a webpage with some texts
- create a scroll-to-top button
- make that button visible afte a bit of scroll
- animate that button
- onclick of that button it should scroll to top

**Example Code:**

```js
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


```


## Day 04: Back Easing 

### Tab Indicator Animation - Implementation Notes

#### Overview
This code creates an animated sliding indicator that moves beneath tabs when clicked, using GSAP for smooth animations.

---

#### Code Structure & Explanation

##### 1. Element Selection
```javascript
const tabs = document.querySelectorAll(".tab");
const tabRow = document.querySelector(".tab-row");
const indicator = document.querySelector(".indicator");
```
- **tabs**: All clickable tab elements
- **tabRow**: Container holding all tabs (needed for calculating relative positions)
- **indicator**: The visual element that slides under the active tab

---

##### 2. Core Function: `updateIndicator(target)`

**Purpose**: Calculates and animates the indicator to match the target tab's position and width.

```javascript
const updateIndicator = (target) => {
  const tabBounds = target.getBoundingClientRect();
  const rowBounds = tabRow.getBoundingClientRect();
```

**Key Concept - `getBoundingClientRect()`**:
- Returns the size and position of an element relative to the **viewport**
- Both `tabBounds` and `rowBounds` are viewport-relative coordinates

**Why we need BOTH measurements**:
- `tabBounds.left` - where the clicked tab is positioned from the left edge of viewport
- `rowBounds.left` - where the tab container starts from the left edge of viewport
- `offset = tabBounds.left - rowBounds.left` - calculates the tab's position **within** the container

**The Animation**:
```javascript
gsap.to(indicator, {
  x: offset,           // Move indicator horizontally
  width: width,        // Match the tab's width
  duration: 0.4,       // Animation speed
  ease: "back.out(1.7)" // Bouncy easing effect
});
```

---

##### 3. Event Listeners

```javascript
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");
    updateIndicator(tab);
  });
});
```

**Process**:
1. Remove `active` class from all tabs (cleanup)
2. Add `active` class to clicked tab
3. Animate indicator to new position

---

##### 4. Initial State

```javascript
updateIndicator(document.querySelector(".tab.active"));
```

**Critical**: Sets indicator position on page load to match the initially active tab.

---

### Implementation Steps (Checklist)

#### HTML Setup
- [ ] Create container with class `tab-row`
- [ ] Add multiple elements with class `tab`
- [ ] Add one element with class `indicator` (the sliding underline)
- [ ] Mark one tab with `active` class for initial state

#### CSS Requirements
- [ ] Style `.tab-row` with `position: relative`
- [ ] Style `.indicator` with:
  - `position: absolute`
  - `bottom: 0` (or appropriate positioning)
  - `height` set (e.g., 2-3px for underline)
  - Background color
- [ ] Style `.tab.active` for visual feedback

#### JavaScript Setup
- [ ] Import GSAP library
- [ ] Copy the code with correct class names matching your HTML
- [ ] Ensure GSAP is loaded before script runs

---

### Common Pitfalls to Avoid

1. **Indicator not visible**: Check CSS positioning and z-index
2. **Wrong initial position**: Ensure one tab has `.active` class in HTML
3. **Indicator jumps**: Verify `tab-row` has `position: relative`
4. **GSAP not working**: Check library import and load order

---

### Why This Approach Works

**Position Calculation Logic**:
- Browser gives us viewport coordinates (getBoundingClientRect)
- We need container-relative coordinates for animation
- Subtracting container position from tab position = relative offset
- This works regardless of where the tab-row is on the page

**Animation Benefits**:
- GSAP handles smooth interpolation between positions
- Width animation creates satisfying "stretch" effect
- Back easing adds playful bounce

---

### Future Enhancements

- Add keyboard navigation (arrow keys)
- Sync with content panels
- Add touch/swipe gestures for mobile
- Store active tab in localStorage
- Handle dynamically added/removed tabs