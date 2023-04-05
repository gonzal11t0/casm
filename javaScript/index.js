window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
});
const hamburguerMenu = document.querySelector(".hamburguer-menu");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburguerMenu.addEventListener("click", () => {
	navLinks.classList.toggle("nav-active");
	links.forEach((link, index) => {
    if (link.style.animation) {
		link.style.animation = "";
    } else {
		link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
    }
});
hamburguerMenu.classList.toggle("toggle");
});
