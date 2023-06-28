
/*menu hamburgesa*/
function menuHamburgesa(){
    const hamburguerMenu = document.querySelector(".hamburguer-menu");
    const navLinks = document.querySelector(".nav-links");
    const links = document.querySelectorAll(".nav-links li");
    
    hamburguerMenu.addEventListener("click", () => {
        navLinks.classList.toggle("nav-active");
        links.forEach((link, index) => {
        if (link.style.animation) {
        link.style.animation = "";
        } else {
        link.style.animation = `navLinkFade 0.1s ease forwards ${index / 2 + 0.1}s`;
        }
    });
    hamburguerMenu.classList.toggle("toggle");
    });
};

menuHamburgesa()

/*boton ir arriba index*/
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("index-historia",window.scrollY>0);
});