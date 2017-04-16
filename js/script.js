var writeUsForm = document.querySelector(".write-us");
var formBtn = document.querySelector(".bnt-feedback");
var formCloseBtn = document.querySelector(".write-us__close");

formBtn.addEventListener("click", function (showForm) {
  showForm.preventDefault();
  writeUsForm.classList.add("write-us--show");
});

function formClose() {
  writeUsForm.classList.remove("write-us--show");
}

function closeModalEsc(event) {
  if (event.keyCode === 27) {
    formClose();
  }
}

formCloseBtn.addEventListener("click", formClose);
window.addEventListener("keydown", closeModalEsc);