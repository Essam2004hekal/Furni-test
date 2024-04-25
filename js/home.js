// Top Btn
let myButton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (myButton.style.display = "none" && document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block";
} else {
    myButton.style.display = "none";
}
}

// Click to Top
function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0;
}