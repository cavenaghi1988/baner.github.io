let active = document.querySelector(".name");
let btnActive = document.querySelector(".btn");


document.body.addEventListener("click", function () {
  const url = "https://virogroup.ru/0001/gm/view-banner/QP/left/0"
  window.open(url, "_blank")
})


window.onload = function () {
  window.addEventListener("message", function (event) {
    if (event.data != "") {
      active.classList.add(`${event.data}`)
      btnActive.classList.add(`${event.data}`)
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