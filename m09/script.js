
var clearButton = document.querySelector("#clear-button");
var dotColor = document.querySelector("#dot-color");
var dotSize = document.querySelector("#dot-size");

clearButton.addEventListener("click", function(event) {

  var dots = document.getElementsByClassName("dot");
  while (dots[0]) {
    dots[0].parentNode.removeChild(dots[0]);
  }
  
  event.stopPropagation();
});

addEventListener("click", function(event) {
  var dot = document.createElement("div");
  dot.className = "dot";
  
  dot.style.backgroundColor = dotColor.value;
  var size = dotSize.value + "px";
  dot.style.width = size;
  dot.style.height = size;

  dot.style.left = (event.pageX - dotSize.value / 2) + "px";
  dot.style.top = (event.pageY - dotSize.value / 2) + "px";

  document.body.appendChild(dot);
});

