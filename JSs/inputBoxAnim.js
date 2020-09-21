import { TimelineMax } from "gsap";
export default function inputBoxAnim() {
  const tlm = new TimelineMax({ paused: true });

  const inputBox = document.querySelector("#image-name");
  const name = document.querySelector(".name");
  const saveButton = document.querySelector("#save");
  const Okay = document.querySelector("#submit");
  const disableCanvas = document.querySelector("#canvasDisable");

  tlm.to(inputBox, { top: "50%" });

  saveButton.addEventListener("click", (_) => {
    disableCanvas.classList.add("disable");
    tlm.play();
  });

  Okay.addEventListener("click", (_) => {
    if (name.value === "") return;
    disableCanvas.classList.remove("disable");
    tlm.reverse();
  });

  disableCanvas.addEventListener("click", (_) => {
    disableCanvas.classList.remove("disable");
    tlm.reverse();
  });
}
