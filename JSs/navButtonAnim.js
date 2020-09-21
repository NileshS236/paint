import { TimelineMax } from "gsap";

export default function navButtonAnim() {
  // Define TimelineMax
  const tlm = new TimelineMax({ paused: true, reversed: true });

  const lineOne = document.querySelector("#line_one");
  const lineTwo = document.querySelector("#line_two");
  const lineThree = document.querySelector("#line_three");

  const clickArea = document.querySelector(".navButton");

  // Adding animations
  tlm
    .to(clickArea, 0.25, { rotation: 180 }, "slide")
    .to(lineOne, 0.25, { transformOrigin: "50% 50%", y: 5 }, "slide")
    .to(lineThree, 0.25, { transformOrigin: "50% 50%", y: -5 }, "slide")
    .to(lineTwo, 0.25, { scaleX: 0 }, "slide")
    .to(lineOne, 0.25, { transformOrigin: "50% 50%", rotation: 45 }, "cross")
    .to(
      lineThree,
      0.25,
      { transformOrigin: "50% 50%", rotation: -45 },
      "cross"
    );

  // Initializing animations
  clickArea.addEventListener("click", (_) => {
    clickArea.classList.toggle("js_x");
    tlm.reversed() ? tlm.play() : tlm.reverse();
  });
}
