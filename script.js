var ball = document.querySelector(".ball");
var toggle = document.querySelector(".toggle");
var body = document.querySelector("body");
var h1 = document.querySelectorAll("h1");
var h3 = document.querySelectorAll("h3");
var card1 = document.querySelectorAll(".card1");
var card2 = document.querySelectorAll(".card2");
var card3 = document.querySelectorAll(".card3");
var card4 = document.querySelectorAll(".card4");
var card5 = document.querySelectorAll(".card5");
var card6 = document.querySelectorAll(".card6");
var card7 = document.querySelectorAll(".card7");
var card8 = document.querySelectorAll(".card8");

// 0 means light mode
var count = 0;
toggle.addEventListener("click", () => {
  if (count === 0) {
    ball.style.right = null;
    ball.style.left = "3px";
    toggle.style.background =
      "linear-gradient(to right,hsl(210, 78%, 56%),hsl(146, 68%, 55%))";
    ball.style.backgroundColor = "hsl(228, 28%, 20%)";
    body.style.backgroundColor = "hsl(232, 19%, 15%)";
    h1.forEach((h) => (h.style.color = "#fff"));
    h3.forEach((h) => (h.style.color = "#c1c1c1"));
    card1.forEach(
      (card) => (card.style.backgroundColor = "hsl(228, 28%, 20%)")
    );
    card2.forEach(
      (card) => (card.style.backgroundColor = "hsl(228, 28%, 20%)")
    );
    card3.forEach(
      (card) => (card.style.backgroundColor = "hsl(228, 28%, 20%)")
    );
    card4.forEach(
      (card) => (card.style.backgroundColor = "hsl(228, 28%, 20%)")
    );
    card5.forEach(
      (card) => (card.style.backgroundColor = "hsl(228, 28%, 20%)")
    );
    card6.forEach(
      (card) => (card.style.backgroundColor = "hsl(228, 28%, 20%)")
    );
    card7.forEach(
      (card) => (card.style.backgroundColor = "hsl(228, 28%, 20%)")
    );
    card8.forEach(
      (card) => (card.style.backgroundColor = "hsl(228, 28%, 20%)")
    );
    count = 1;
  } else {
    ball.style.left = null;
    ball.style.right = "3px";
    toggle.style.background = "hsl(230, 22%, 74%)";
    ball.style.backgroundColor = "white";
    body.style.backgroundColor = "white";

    h1.forEach((h) => (h.style.color = "#000"));
    h3.forEach((h) => (h.style.color = "#000"));

    card1.forEach(
      (card) => (card.style.backgroundColor = "hsl(227, 47%, 96%)")
    );
    card2.forEach(
      (card) => (card.style.backgroundColor = "hsl(227, 47%, 96%)")
    );
    card3.forEach(
      (card) => (card.style.backgroundColor = "hsl(227, 47%, 96%)")
    );
    card4.forEach(
      (card) => (card.style.backgroundColor = "hsl(227, 47%, 96%)")
    );
    card5.forEach(
      (card) => (card.style.backgroundColor = "hsl(227, 47%, 96%)")
    );
    card6.forEach(
      (card) => (card.style.backgroundColor = "hsl(227, 47%, 96%)")
    );
    card7.forEach(
      (card) => (card.style.backgroundColor = "hsl(227, 47%, 96%)")
    );
    card8.forEach(
      (card) => (card.style.backgroundColor = "hsl(227, 47%, 96%)")
    );

    count = 0;
  }
});
