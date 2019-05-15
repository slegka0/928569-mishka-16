var modal = document.querySelector(".modal");
var modal__submit = document.querySelector(".modal__submit");
var order__button = document.querySelectorAll(".button--js");
var overlay = document.querySelector(".overlay");

if(order__button.length) {
  for (var i = 0; i < order__button.length; i++) {
    order__button[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.add("modal--show");
      overlay.classList.add("overlay--show");
    });
  }
}

document.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    modal.classList.remove("modal--show");
    overlay.classList.remove("overlay--show");
  }
});
