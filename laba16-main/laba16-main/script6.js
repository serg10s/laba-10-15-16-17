
var paragraph1 = document.getElementById("paragraph1");
var paragraph2 = document.getElementById("paragraph2");
var paragraph3 = document.getElementById("paragraph3");

function handleClick(event) {
    var number = parseInt(event.target.textContent);
    var square = number * number;
    event.target.textContent = square;
}


paragraph1.addEventListener("click", handleClick);
paragraph2.addEventListener("click", handleClick);
paragraph3.addEventListener("click", handleClick);
