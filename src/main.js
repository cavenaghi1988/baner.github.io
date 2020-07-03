let iframe = document.querySelectorAll("iframe")


let liframe = document.getElementById("left");
let riframe = document.getElementById("right");
let tiframe = document.getElementById("top");
let main = document.getElementById("main-site");

let oldIframe = iframe.contentDocument;

window.onload = function () {
  if (iframe) {
    setInterval(() => {
      let newiframe = iframe.contentDocument;
      if (newiframe == oldIframe) {
        return
      } else {
        oldIframe = newiframe
      }
    }, 500);
  }

}



window.onscroll = function () {
  let rect = main.getBoundingClientRect();
  let rectTop = tiframe.getBoundingClientRect();

  if (rectTop) {
    tiframe.contentWindow.postMessage(`${rectTop.top}`, '*')

  }


  if (rect.top < 0) {
    liframe.contentWindow.postMessage("active", '*')
    riframe.contentWindow.postMessage("active", "*")
    return false
  } else {
    liframe.contentWindow.postMessage("", '*')
    riframe.contentWindow.postMessage("", "*")
    return false
  }
}