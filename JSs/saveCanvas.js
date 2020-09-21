export default function saveCanvas() {
  const download = document.querySelector("#save");
  const canvas = document.querySelector("canvas");
  const disableCanvas = document.querySelector("#canvasDisable");
  const requiredMsg = document.querySelector(".reqmsg");
  const name = document.querySelector(".name");
  const Okay = document.querySelector("#submit");
  const body = document.querySelector("body");

  name.addEventListener("click", (_) => {
    if (requiredMsg.style.display == "block") {
      requiredMsg.classList.add("required");
    }
  });

  requiredMsg.addEventListener("click", (_) => {
    if (requiredMsg.style.display == "block") {
      requiredMsg.classList.add("required");
      name.focus();
    }
  });
  disableCanvas.addEventListener("click", (_) => {
    if (requiredMsg.style.display == "block") {
      requiredMsg.classList.remove("required");
      requiredMsg.style.display = "none";
    }
  });

  download.addEventListener("click", (_) => {
    name.focus();
    // IE/Edge supports PNG only
    if (window.navigator.msSaveBlob) {
      window.navigator.msSaveBlob(canvas.msToBlob(), "canvas-image.png");
    } else {
      Okay.addEventListener("click", (_) => {
        let dataURI = canvas.toDataURL();
        if (name.value === "") {
          requiredMsg.style.display = "block";
        } else {
          const a = document.createElement("a");
          body.appendChild(a);
          a.href = dataURI;
          a.download = name.value + ".png";
          a.click();
          body.removeChild(a);
          if (requiredMsg.style.display == "block") {
            requiredMsg.classList.remove("required");
            requiredMsg.style.display = "none";
          }
          name.value = "";
        }
      });
    }
  });
}
