let bg = document.querySelector(".bg")
let video = document.querySelector(".video")
let text = document.querySelector(".text")


document.body.addEventListener("click", function () {
  const url = "https://virogroup.ru/0001/gm/view-banner/QP/left/0"
  window.open(url, "_blank")
})

window.onload = function () {
  window.addEventListener("message", function (event) {
    if (event.data) {
      bg.style.transform = (`translate(-50%, ${event.data * -1}px)`)
    }


    if (event.data == "600px") {
      bg.classList.add("active")
      video.style.display = "none";
      text.style.left = "157px";
      text.style.width = "50%";
    } else if (event.data == "800px") {
      bg.classList.remove("active")
      video.style.display = "none";
      text.style.left = "181px";
      text.style.width = "54%";
    } else if (event.data == "920px") {
      video.style.marginRight = "2px";
      video.style.display = "inline-block";
      video.style.height = "130px";
      text.style.left = "-105px";
      text.style.width = "28%";
    } else if (event.data == "1121px") {
      video.style.display = "inline-block";
      video.style.height = "203px";
    }

  })
}