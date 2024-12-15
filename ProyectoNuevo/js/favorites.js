let fondo = document.getElementById("fondo");
let jojo = document.getElementById("jojo");

window.addEventListener("scroll", function() {
    var value = window.scrollY;

    fondo.style.top = value * 0.5 + "px";
    jojo.style.top = value * 0.5 + "px";
    
});