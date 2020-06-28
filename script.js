var ball = document.querySelector(".ball");
var toggle = document.querySelector(".toggle");

var count = 0;
toggle.addEventListener("click", () => {
  if (count === 0) {
    ball.style.right = null;
    ball.style.left = "3px";
    count = 1;
  } else {
    ball.style.left = null;
    ball.style.right = "3px";
    count = 0;
  }
});
