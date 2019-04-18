var modal = document.querySelector(".map-btn");
var popup_open = document.querySelector(".modal-open");
var popup_close = document.querySelector(".modal-close");

modal.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_open.classList.add("modal-show");
});

popup_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup_open.classList.remove("modal-show");
});
