export default function changeCursor() {
  const pen = document.querySelector("#pens");
  const eraser = document.querySelector("#eraser");

  const paintScreen = document.querySelector("#paintScreen");

  const navToggleButton = document.querySelector(".navButton");

  const dropBox = document.querySelector(".dropBox");

  window.addEventListener("click", (_) => {
    if (navToggleButton.classList.contains("js_x")) return;
    dropBox.classList.remove("changeVisibility");
  });

  pen.addEventListener("click", (_) => {
    if (paintScreen.classList.contains("eraserCursor")) {
      paintScreen.classList.remove("eraserCursor");
    }
    paintScreen.classList.add("crosshairCursor");
    dropBox.classList.toggle("changeVisibility");
  });

  eraser.addEventListener("click", (_) => {
    if (paintScreen.classList.contains("crosshairCursor")) {
      paintScreen.classList.remove("crosshairCursor");
    }
    paintScreen.classList.add("eraserCursor");
  });
}
