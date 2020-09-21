export default function toDraw() {
  const canvas = document.querySelector("#paintScreen");
  const draft = document.querySelector("#draft");
  const ctx = canvas.getContext("2d");
  const dctx = draft.getContext("2d");

  const isPenSelected = document.querySelector("#pens");

  let colorPicker = document.querySelector("#color-picker");
  let strokeWidth = document.querySelector("#stroke-width");

  const violet = document.querySelector(".violet");
  const blue = document.querySelector(".blue");
  const red = document.querySelector(".red");
  const green = document.querySelector(".green");
  const yellow = document.querySelector(".yellow");

  const Brush = document.querySelector(".brush");
  const Highlighter = document.querySelector(".highlighter");
  const sprayCan = document.querySelector(".sprayCan");
  const Pencil = document.querySelector(".pencil");

  const eraseAll = document.querySelector("#eraseall");
  const eraser = document.querySelector("#eraser");

  let painting = false;
  let isErasing = false;

  let lastPoint;

  let points = [];

  selectColor();

  // Resize canvas width and height on window resize
  window.addEventListener("resize", resizeScreen);

  function resizeScreen() {
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    draft.height = window.innerHeight;
    draft.width = window.innerWidth;
  }

  resizeScreen();

  // Mouse events
  canvas.addEventListener("mousedown", isPainting);
  canvas.addEventListener("mouseup", notPainting);
  canvas.addEventListener("mouseout", (_) => {
    window.addEventListener("mouseup", (_) => {
      painting = false;
      points.length = 0;
      if (canvas.classList.contains("eraserCursor")) isErasing = true;
      else isErasing = false;
      ctx.drawImage(draft, 0, 0); // copy drawing to main
      dctx.clearRect(0, 0, draft.width, draft.height);
      dctx.beginPath();
      ctx.beginPath();
    });
  });
  canvas.addEventListener("mousemove", draw);

  isPenSelected.addEventListener("click", (_) => {
    isPenSelected.classList.add("js_yes");
  });

  function draw(e) {
    if (!painting) return;
    // Erase
    else if (canvas.classList.contains("eraserCursor")) {
      if (!isErasing) return;
      ctx.lineWidth = 15;
      ctx.lineCap = "round";
      ctx.globalCompositeOperation = "destination-out";

      ctx.shadowBlur = 0;

      ctx.lineTo(e.clientX + 8, e.clientY + 8);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX + 8, e.clientY + 8);
    }
    // Draw
    else if (
      isPenSelected.classList.contains("js_yes") &&
      Pencil.classList.contains("js_active")
    ) {
      ctx.globalAlpha = 1;
      draft.style.opacity = 1;
      ctx.globalCompositeOperation = "source-over";
      ctx.lineWidth = strokeWidth.value;
      ctx.strokeStyle = colorPicker.value;
      ctx.lineCap = "round";

      ctx.shadowBlur = 0;

      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(e.clientX, e.clientY);
    } else if (
      isPenSelected.classList.contains("js_yes") &&
      Brush.classList.contains("js_active")
    ) {
      ctx.globalAlpha = 0.4;
      draft.style.opacity = 0.4;
      dctx.lineWidth = strokeWidth.value;
      dctx.strokeStyle = colorPicker.value;
      dctx.lineCap = "round";

      ctx.globalCompositeOperation = "source-over";

      ctx.shadowBlur = 0;

      dctx.lineTo(e.clientX, e.clientY);
      dctx.stroke();
      dctx.beginPath();
      dctx.moveTo(e.clientX, e.clientY);
    } else if (
      isPenSelected.classList.contains("js_yes") &&
      sprayCan.classList.contains("js_active")
    ) {
      ctx.globalAlpha = 1;
      draft.style.opacity = 1;
      ctx.globalCompositeOperation = "source-over";

      ctx.shadowBlur = 7;
      ctx.shadowColor = colorPicker.value;

      ctx.lineWidth = strokeWidth.value;
      ctx.strokeStyle = colorPicker.value;

      points.push({ x: e.clientX, y: e.clientY });

      ctx.beginPath();
      ctx.moveTo(points[0].x, points[0].y);
      for (var i = 1; i < points.length; i++) {
        ctx.lineTo(points[i].x, points[i].y);
      }
      ctx.stroke();
    } else if (
      isPenSelected.classList.contains("js_yes") &&
      Highlighter.classList.contains("js_active")
    ) {
      ctx.globalAlpha = 1;
      draft.style.opacity = 1;
      ctx.globalCompositeOperation = "source-over";
      ctx.lineWidth = 3;
      ctx.strokeStyle = colorPicker.value;
      ctx.lineCap = "round";

      ctx.shadowBlur = 2;
      ctx.shadowColor = colorPicker.value;

      ctx.beginPath();

      ctx.globalAlpha = 0.7;
      ctx.moveTo(lastPoint.x, lastPoint.y);
      ctx.lineTo(e.clientX, e.clientY);
      ctx.stroke();

      ctx.moveTo(lastPoint.x - 4, lastPoint.y - 4);
      ctx.lineTo(e.clientX - 4, e.clientY - 4);
      ctx.stroke();

      ctx.moveTo(lastPoint.x - 2, lastPoint.y - 2);
      ctx.lineTo(e.clientX - 2, e.clientY - 2);
      ctx.stroke();

      ctx.moveTo(lastPoint.x + 2, lastPoint.y + 2);
      ctx.lineTo(e.clientX + 2, e.clientY + 2);
      ctx.stroke();

      ctx.moveTo(lastPoint.x + 4, lastPoint.y + 4);
      ctx.lineTo(e.clientX + 4, e.clientY + 4);
      ctx.stroke();

      lastPoint = { x: e.clientX, y: e.clientY };
    }
  }

  eraser.addEventListener("click", (_) => {
    ctx.globalAlpha = 1;
    draft.style.opacity = 1;
    isErasing = true;
  });

  function isPainting(e) {
    painting = true;
    points.push({ x: e.clientX, y: e.clientY });
    lastPoint = { x: e.clientX, y: e.clientY };
    draw(e);
  }

  function notPainting() {
    painting = false;
    points.length = 0;
    if (canvas.classList.contains("eraserCursor")) isErasing = true;
    else isErasing = false;
    ctx.drawImage(draft, 0, 0); // copy drawing to main
    dctx.clearRect(0, 0, draft.width, draft.height);
    dctx.beginPath();
    ctx.beginPath();
  }

  // Enabling choose color
  function selectColor() {
    violet.addEventListener("click", (_) => {
      colorPicker.value = "#ee82ee";
    });
    blue.addEventListener("click", (_) => {
      colorPicker.value = "#5dcff5";
    });
    red.addEventListener("click", (_) => {
      colorPicker.value = "#f75858";
    });
    green.addEventListener("click", (_) => {
      colorPicker.value = "#76ff76";
    });
    yellow.addEventListener("click", (_) => {
      colorPicker.value = "#f8e326";
    });
  }

  // Erase All / Clear Board
  eraseAll.addEventListener("click", (_) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
}
