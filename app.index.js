let mouseCursor = document.querySelector(".cursor");
let navLinks = document.querySelectorAll(".nav a li");

window.addEventListener("mousemove", cursor);

function cursor(e){
    mouseCursor.style.top = e.pageY + "px";
    mouseCursor.style.left = e.pageX + "px";
}

//togglebtn

const togglebtn = document.querySelector('.togglebtn');
const togglebtnIcon = document.querySelector('.togglebtn image');
const mainbody = document.querySelector('#mainbody');

togglebtn.onclick = function () {
    mainbody.classList.toggle("open")
    const isOpen = mainbody.classList.contains("open")

// togglebtnIcon.classList = isOpen
//  ? "show"
//  : "hidden"

mainbody.classList = isOpen
? "show"
: "hidden"
};

const xBtn = document.querySelector("x-btn");
xBtn