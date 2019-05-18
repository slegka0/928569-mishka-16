var modal = document.querySelector(".modal");
var modal__submit = document.querySelector(".modal__submit");
var order__button = document.querySelectorAll(".button--js");
var overlay = document.querySelector(".overlay");
var header__nav = document.querySelector(".site-navigation");
var header__button = document.querySelector(".site-navigation__button");
var catalog__button = document.querySelectorAll(".products__link--js");

header__nav.classList.remove('site-navigation--nojs');

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

header__button.addEventListener('click', function() {
  if (header__nav.classList.contains('site-navigation--closed')) {
    header__nav.classList.remove('site-navigation--closed');
    header__nav.classList.add('site-navigation--opened');
  } else {
    header__nav.classList.add('site-navigation--closed');
    header__nav.classList.remove('site-navigation--opened');
  }
});

if(catalog__button.length) {
  for (var i = 0; i < catalog__button.length; i++) {
    catalog__button[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      modal.classList.add("modal--show");
      overlay.classList.add("overlay--show");
    });
  }
}
