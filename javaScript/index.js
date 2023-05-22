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
		link.style.animation = `navLinkFade 0.2s ease forwards ${index / 5 + 0.2}s`;
    }
});
hamburguerMenu.classList.toggle("toggle");
});


