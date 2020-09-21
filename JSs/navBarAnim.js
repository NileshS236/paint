import { TimelineMax } from "gsap";

export default function navBarAnim() {
  const TLM = new TimelineMax({ paused: true });

  const navBar = document.querySelector(".navbar");
  const menuToggleButton = document.querySelector(".navButton");

  TLM.from(navBar, { scaleY: 0, transformOrigin: "top" }).to(navBar, 0.125, {
    scaleY: 1,
    transformOrigin: "top",
    ease: "Power2 easeInOut",
  });

  menuToggleButton.addEventListener("click", (_) => {
    if (menuToggleButton.classList.contains("js_x")) {
      TLM.play();
    } else {
      TLM.reverse();
    }
  });
}
