var link1 = document.getElementById("link1");
var link2 = document.getElementById("link2");
var link3 = document.getElementById("link3");


function handleMouseover(event) {
    var title = event.target.getAttribute("title");
    event.target.textContent = title;
}


function handleMouseout(event) {
    event.target.textContent = event.target.id;
}


link1.addEventListener("mouseover", handleMouseover);
link1.addEventListener("mouseout", handleMouseout);

link2.addEventListener("mouseover", handleMouseover);
link2.addEventListener("mouseout", handleMouseout);

link3.addEventListener("mouseover", handleMouseover);
link3.addEventListener("mouseout", handleMouseout);

link1.removeEventListener("mouseover", handleMouseover);
link1.removeEventListener("mouseout", handleMouseout);

link2.removeEventListener("mouseover", handleMouseover);
link2.removeEventListener("mouseout", handleMouseout);

link3.removeEventListener("mouseover", handleMouseover);
link3.removeEventListener("mouseout", handleMouseout);