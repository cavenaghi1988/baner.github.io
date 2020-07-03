let bg = document.querySelector(".bg")


document.body.addEventListener("click", function () {
  const url = "https://virogroup.ru/0001/gm/view-banner/QP/left/0"
  window.open(url, "_blank")
})

window.onload = function () {
  window.addEventListener("message", function (event) {
    if (event.data) {
      bg.style.transform = (`translate(-50%, ${event.data * -1}px)`)
    }
  })
}