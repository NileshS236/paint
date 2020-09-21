export default function changePen() {
  const Brush = document.querySelector(".brush");
  const Highlighter = document.querySelector(".highlighter");
  const sprayCan = document.querySelector(".sprayCan");
  const Pencil = document.querySelector(".pencil");

  const changeBrush = document.querySelector(".sel_brush");
  const changeHighlighter = document.querySelector(".sel_highlighter");
  const changesprayCan = document.querySelector(".sel_sprayCan");
  const changePencil = document.querySelector(".sel_pencil");

  const paintScreen = document.querySelector("#paintScreen");
  const isPenSelected = document.querySelector("#pens");

  changeBrush.addEventListener("click", (_) => {
    Pencil.style.opacity = 0;
    sprayCan.style.opacity = 0;
    Highlighter.style.opacity = 0;
    Brush.style.opacity = 1;
    Brush.classList.add("js_active");
    Highlighter.classList.remove("js_active");
    sprayCan.classList.remove("js_active");
    Pencil.classList.remove("js_active");
    paintScreen.classList.remove("eraserCursor");
    isPenSelected.classList.add("js_yes");
    paintScreen.classList.add("crosshairCursor");
  });

  changeHighlighter.addEventListener("click", (_) => {
    Pencil.style.opacity = 0;
    sprayCan.style.opacity = 0;
    Highlighter.style.opacity = 1;
    Brush.style.opacity = 0;
    Brush.classList.remove("js_active");
    Highlighter.classList.add("js_active");
    sprayCan.classList.remove("js_active");
    Pencil.classList.remove("js_active");
    paintScreen.classList.remove("eraserCursor");
    isPenSelected.classList.add("js_yes");
    paintScreen.classList.add("crosshairCursor");
  });

  changesprayCan.addEventListener("click", (_) => {
    Pencil.style.opacity = 0;
    sprayCan.style.opacity = 1;
    Highlighter.style.opacity = 0;
    Brush.style.opacity = 0;
    Brush.classList.remove("js_active");
    Highlighter.classList.remove("js_active");
    sprayCan.classList.add("js_active");
    Pencil.classList.remove("js_active");
    paintScreen.classList.remove("eraserCursor");
    isPenSelected.classList.add("js_yes");
    paintScreen.classList.add("crosshairCursor");
  });

  changePencil.addEventListener("click", (_) => {
    Pencil.style.opacity = 1;
    sprayCan.style.opacity = 0;
    Highlighter.style.opacity = 0;
    Brush.style.opacity = 0;
    Brush.classList.remove("js_active");
    Highlighter.classList.remove("js_active");
    sprayCan.classList.remove("js_active");
    Pencil.classList.add("js_active");
    paintScreen.classList.remove("eraserCursor");
    isPenSelected.classList.add("js_yes");
    paintScreen.classList.add("crosshairCursor");
  });
}
