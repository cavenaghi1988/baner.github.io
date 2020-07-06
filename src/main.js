let iframe = document.querySelectorAll("iframe");

let liframe = document.getElementById("left");
let riframe = document.getElementById("right");
let tiframe = document.getElementById("top");
let main = document.getElementById("main-site");


window.onload = function () {
  setInterval(() => {
    if (window.matchMedia("(max-width: 770px)").matches) {
      tiframe.contentWindow.postMessage(`600px`, "*");
    } else if (window.matchMedia("(max-width: 800px)").matches) {
      tiframe.contentWindow.postMessage(`800px`, "*");
    } else if (window.matchMedia("(max-width: 920px)").matches) {
      tiframe.contentWindow.postMessage(`920px`, "*");
    } else if (window.matchMedia("(max-width: 1121px)").matches) {
      tiframe.contentWindow.postMessage(`1121px`, "*");
    } else {
      tiframe.contentWindow.postMessage(`hd`, "*");
    }
  }, 500);
};

window.onscroll = function () {
  let rect = main.getBoundingClientRect();
  let rectTop = tiframe.getBoundingClientRect();

  if (rectTop) {
    tiframe.contentWindow.postMessage(`${rectTop.top}`, "*");
  }

  if (rect.top < 0) {
    liframe.contentWindow.postMessage("active", "*");
    riframe.contentWindow.postMessage("active", "*");
    return false;
  } else {
    liframe.contentWindow.postMessage("", "*");
    riframe.contentWindow.postMessage("", "*");
    return false;
  }
};