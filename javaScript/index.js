
/*boton ir arriba index*/
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("abajo",window.scrollY>0);
});



/*menu hamburgeza*/
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


// Crear el elemento <main>
var mainElement = document.createElement("main");

/* SECCION 1*/ 


/* creamos la seccion 1 */

var seccion1=document.createElement("section");
seccion1.id = "seccion-1";


/* creamos el div  */
var div1=document.createElement("div");
div1.className="bg-5"

/* creamos el h1 */
var h1_1=document.createElement("h1");
  h1_1.className="animated-shadow";
  h1_1.textContent="CLUB ATLETICO SAN MIGUEL";

/* agregamos el h1 al div */
div1.appendChild(h1_1);

/* agregamos el div a la seccion */
seccion1.appendChild(div1);

// Agregar la sección 1 al elemento <main>
mainElement.appendChild(seccion1);
  





// Crear la sección 2 dinámicamente
const seccion2 = document.createElement("section");
seccion2.id = "seccion-2";

const container = document.createElement("div");
container.classList.add("container");

const card1 = createCard("Recuperando camino", "Luego de ganar después de 6 partidos, San Miguel se encuentra segundo en la tabla. Goles: ⚽️Lucas Scarnato; ⚽️Ezequiel Melillo; ⚽️ Rodrigo Diaz.");
const card2 = createCard("FÚTBOL PROFESIONAL ⚽", "Dos para un puesto, ante la lesión de Melillo, la duda para reemplazarlos es si juega David Muller o Matias Sama en ese sector de la cancha, ambos jugadores pueden darle un aporte al equipo que pueden construir una victoria, uno de los dos será titular!!");
const card3 =createCard("En la recta final!!","ya se encara la parte final del torneo siendo líder del mismo junto a los Andes y comunicaciones,quedan seis finales dónde puede pasar cualquier cosa, el hincha se ilusiona con ganar un título,el último que ganó San Miguel fue en 1984 ,cuando obtuvo el ascenso a la primera B.Hace mucho tiempo que no vivíamos un torneo siendo protagonista y luchando por el título.");
const card4 =createCard("Ezequiel Melillo es baja!!!","Finalmente el volante se resintió de la lesión y no estará hoy ante el deportivo merlo,Melillo que venía jugando en gran nivel se perderá el Match ante el charro!!");
container.appendChild(card1);
container.appendChild(card2);
container.appendChild(card3);
container.appendChild(card4);
seccion2.appendChild(container);

// Crear la sección 3 dinámicamente
const seccion3 = document.createElement("section");
seccion3.id = "seccion-3";

const title = document.createElement("h1");
title.classList.add("flip-card-inner-title");
title.textContent = "Plantilla 2023";

const cardsContainer = document.createElement("div");
cardsContainer.classList.add("cards");

// Crear las tarjetas de la plantilla
const plantilla = [
  { nombre: "Nombre 1", puesto: "Director Tecnico", imagen: "./img/fto-2.jpg" },
  { nombre: "Nombre 2", puesto: "Arquero", imagen: "./img/fto-3.jpg" },
  { nombre: "Nombre 3", puesto: "Arquero", imagen: "./img/fto-4.jpg" },
  { nombre: "Nombre 4", puesto: "Defensor", imagen: "./img/fto-5.jpg" },
  { nombre: "Nombre 5", puesto: "Defensor", imagen: "./img/fto-6.jpg" },
  { nombre: "Nombre 6", puesto: "Defensor", imagen: "./img/fto-1.jpg" },
  { nombre: "Nombre 7", puesto: "Defensor", imagen: "./img/fto-2.jpg" },
  { nombre: "Nombre 8", puesto: "Defensor", imagen: "./img/fto-3.jpg" },
  { nombre: "Nombre 9", puesto: "Mediocampista", imagen: "./img/fto-4.jpg" },
  { nombre: "Nombre 10", puesto: "Mediocampista", imagen: "./img/fto-5.jpg" },
  { nombre: "Nombre 11", puesto: "Mediocampista", imagen: "./img/fto-6.jpg" },
  { nombre: "Nombre 12", puesto: "Mediocampista", imagen: "./img/fto-1.jpg" }
];

plantilla.forEach((jugador) => {
  const flipCard = createFlipCard(jugador.nombre, jugador.puesto, jugador.imagen);
  cardsContainer.appendChild(flipCard);
});

seccion3.appendChild(title);
seccion3.appendChild(cardsContainer);

// Agregar las secciones al documento
const main = document.querySelector("main");
main.appendChild(seccion2);
main.appendChild(seccion3);

// Función para crear una tarjeta de información
function createCard(title, content) {
  const card = document.createElement("div");
  card.id = "card";

  const front = document.createElement("div");
  front.classList.add("front");

  const h1 = document.createElement("h1");
  h1.id = "card-front-title";
  h1.textContent = title;

  const back = document.createElement("div");
  back.classList.add("back");

  const p = document.createElement("p");
  p.textContent = content;

  front.appendChild(h1);
  back.appendChild(p);
  card.appendChild(front);
  card.appendChild(back);

  return card;
}

// Función para crear una tarjeta de la plantilla
function createFlipCard(nombre, puesto, imagen) {
  const flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");

  const flipCardInner = document.createElement("div");
  flipCardInner.classList.add("flip-card-inner");

  const flipCardFront = document.createElement("div");
  flipCardFront.classList.add("flip-card-front");

  const h1 = document.createElement("h1");
  h1.textContent = nombre;

  const h4 = document.createElement("h4");
  h4.textContent = puesto;

  const flipCardBack = document.createElement("div");
  flipCardBack.classList.add("flip-card-back");

  const img = document.createElement("img");
  img.classList.add("img");
  img.src = imagen;
  img.alt = "";

  flipCardFront.appendChild(h1);
  flipCardFront.appendChild(h4);
  flipCardBack.appendChild(img);
  flipCardInner.appendChild(flipCardFront);
  flipCardInner.appendChild(flipCardBack);
  flipCard.appendChild(flipCardInner);

  return flipCard;
}


// Crear el elemento <section> para la sección 4
var seccion4 = document.createElement('section');
seccion4.id = 'seccion-4';

// Crear el elemento <footer> para el pie de página
var footer = document.createElement('footer');
footer.className = 'footer';

// Crear el elemento <div> para el contenedor fluido
var containerFluid = document.createElement('div');
containerFluid.className = 'container-fluid';

// Crear el elemento <div> para la fila
var rowDiv = document.createElement('div');
rowDiv.className = 'row';
rowDiv.style.width = '100%';

// Crear el elemento <div> para el posicionamiento relativo
var relativeDiv = document.createElement('div');
relativeDiv.className = 'position-relative';

// Crear el elemento <h4> para el correo electrónico
var emailH4 = document.createElement('h4');
emailH4.className = 'email-footer';
var emailLink = document.createElement('a');
emailLink.href = 'https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1680552062&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f0%2f%3fstate%3d1%26redirectTo%3daHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tL21haWwvMC8%26nlp%3d1%26RpsCsrfState%3db4cc73cb-eaeb-1feb-9823-ec3da14f681a&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015';
emailLink.target = '_blank';
emailLink.textContent = 'info@clubatleticosanmiguel.com';
emailH4.appendChild(emailLink);

// Crear el elemento <h2> para los derechos de autor
var copyrghtH2 = document.createElement('h2');
copyrghtH2.className = 'copyrght-footer';
copyrghtH2.textContent = '© Copyright 2023. Todos los derechos reservados';

// Crear el elemento <h2> para Instagram
var instagramH2 = document.createElement('h2');
instagramH2.className = 'instagram-footer';
var instagramLink = document.createElement('a');
instagramLink.href = 'https://www.instagram.com/oficial.casm/';
instagramLink.target = '_blank';
instagramLink.textContent = 'Instagram';
instagramH2.appendChild(instagramLink);

// Crear el elemento <h2> para Facebook
var facebookH2 = document.createElement('h2');
facebookH2.className = 'facebook-footer';
var facebookLink = document.createElement('a');
facebookLink.href = 'https://www.facebook.com/sanmiguel.prensa/';
facebookLink.target = '_blank';
facebookLink.textContent = 'Facebook';
facebookH2.appendChild(facebookLink);

// Crear el elemento <h2> para Twitter
var twitterH2 = document.createElement('h2');
twitterH2.className = 'twitter-footer';
var twitterLink = document.createElement('a');
twitterLink.href = 'https://twitter.com/oficial_casm?s=11&t=hBsm0LKSzTWt-VpvGfIhvQ';
twitterLink.target = '_blank';
twitterLink.textContent = 'Twitter';
twitterH2.appendChild(twitterLink);

// Crear el elemento <h5> para el desarrollador
var desarrolladorH5 = document.createElement('h5');
desarrolladorH5.className = 'propiedad-footer';
var desarrolladorLink = document.createElement('a');
desarrolladorLink.href = 'https://gonzal11t0.github.io/Portfolio/';
desarrolladorLink.target = '_blank';
desarrolladorLink.textContent = 'Desarrollador Gonzalo Lazarte';
desarrolladorH5.appendChild(desarrolladorLink);

// Agregar los elementos al árbol del DOM
relativeDiv.appendChild(emailH4);
relativeDiv.appendChild(copyrghtH2);
relativeDiv.appendChild(instagramH2);
relativeDiv.appendChild(facebookH2);
relativeDiv.appendChild(twitterH2);
relativeDiv.appendChild(desarrolladorH5);

rowDiv.appendChild(relativeDiv);

containerFluid.appendChild(rowDiv);

footer.appendChild(containerFluid);

seccion4.appendChild(footer);

// Agregar la sección 4 al final del documento
document.body.appendChild(seccion4);