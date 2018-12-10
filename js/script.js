var button_write_us = document.querySelector(".button-write");
var write_us = document.querySelector(".write-us");
var write_us_close = write_us.querySelector(".write-us-close");
var overlay = document.querySelector(".overlay");

button_write_us.addEventListener("click", function(e) {
  e.preventDefault();
  write_us.classList.add("write-us-show");
  overlay.classList.add("overlay-show");
})

write_us_close.addEventListener("click", function(e) {
  e.preventDefault();
  write_us.classList.remove("write-us-show");
  overlay.classList.remove("overlay-show");
})

overlay.addEventListener("click", function() {  
  write_us.classList.remove("write-us-show");
  overlay.classList.remove("overlay-show");
})