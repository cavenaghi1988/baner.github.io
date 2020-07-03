let active = document.querySelector(".video");
let btnActive = document.querySelector(".btn");
let play = document.querySelector("video")


document.body.addEventListener("click", function () {
  const url = "https://virogroup.ru/0001/gm/view-banner/QP/left/0"
  window.open(url, "_blank")
})


window.onload = function () {
  window.addEventListener("message", function (event) {
    if (event.data != "") {
      active.classList.add(`${event.data}`)
      btnActive.classList.add(`${event.data}`)
      let att = document.createAttribute("autoplay");
      play.setAttributeNode(att);
    } else {
      active.classList.remove("active")
      btnActive.classList.remove("active")
    }

    const url = "https://virogroup.ru/0001/gm/view-banner/QP/left/0"
    if (event.data == "click") {
      window.open(url, "_blank")
    }


  })
}