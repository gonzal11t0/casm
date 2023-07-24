
/* SECCION 1 */


// Creamos la seccion 1

var seccion1 = document.createElement("section");
seccion1.id = "seccion-1";

// Creamos el div
var div1 = document.createElement("div");
div1.className = "bg-5";

// Creamos el h1
var h1_1 = document.createElement("h1");
h1_1.className = "animated-shadow";
h1_1.textContent = "CLUB ATLETICO SAN MIGUEL";

// Agregamos el h1 al div
div1.appendChild(h1_1);

// Agregamos el div a la seccion
seccion1.appendChild(div1);

// Agregamos la seccion 1 al body
document.body.appendChild(seccion1);

// Creamos el elemento main
var main = document.createElement("main");

// Crear la sección 2 dinámicamente
var seccion2 = document.createElement("section");
seccion2.id = "seccion-2";

var container = document.createElement("div");
container.classList.add("container");

var card1 = createCard("Dura derrota", "Por la séptima fecha del Clausura San Miguel recibió a la UAI Urquiza, perdió por la mínima y corto una racha de 16 fechas sin perder de local.Poco hizo la visita para llevarse los 3 puntos que defendió y de contra llegaba al arco de Pucheta.En lo defensivo la figura fue Ordano que le ganó a Regules en el duelo.");
var card2 = createCard("Las pibas siguen sumando", "Sumo su tercer triunfo consecutivo y se afirma para continuar en la b. Mas alla que falta mucho por recorrer ah tenido un buen arranque San Miguel 2-0 Puerto Nuevo Goles:Agustina Bader -2");
var card3 = createCard("Noticia de seleccion", "El delantero Fernando Bianchi fue selecionado para la seleccion senior oficial (+35) que el proximo 30 de julio en la catedral de San Justo jugara con Laferrere de Pergamino.Son elegidos, uno por cada equipo de la Super Liga.");
var card4 = createCard("Lideres de la Reserva", "San Miguel en el Campeonato Primera B esta primero.Ya clasificando aguardando porque todavia falta una fecha donde el equipo de Diforti queda libre.Segun los resultados que se produzxan el trueno podra clasificar para la fase de octavos o cuartos.");
container.appendChild(card1);
container.appendChild(card2);
container.appendChild(card3);
container.appendChild(card4);
seccion2.appendChild(container);



// Crear la sección 3 dinámicamente
var seccion3 = document.createElement("section");
seccion3.id = "seccion-3";

var title = document.createElement("h1");
title.classList.add("flip-card-inner-title");
title.textContent = "Plantilla 2023";

var cardsContainer = document.createElement("div");
cardsContainer.classList.add("cards");

// Crear las tarjetas de la plantilla
var plantilla = [
  { nombre: "GUSTAVO COLEONI",  puesto: "Director Tecnico", imagen: "./img/GUSTAVO COLEONI.png" },
  { nombre: "JOAQUÍN PUCHETA",  puesto: "Arquero",          imagen: "./img/Joaquin Puchetta.png" },
  { nombre: "FRANCISCO MANENTI",puesto: "Defensor",         imagen: "./img/Manenti Francisco.png" },
  { nombre: "RODRIGO DÍAZ",     puesto: "DEFENSOR",         imagen: "./img/Rodrigo Diaz.png" },
  { nombre: "PETER MARTÍNEZ",   puesto: "DEFENSOR",         imagen: "./img/Grance Peter.png" },
  { nombre: "IVÁN REGULES",     puesto: "DEFENSOR",          imagen: "./img/Ivan Regules.png" },
  { nombre: "Dixon Rentería",   puesto: "DEFENSOR",          imagen: "./img/Dixon Renteria.png" }, 
  { nombre: "Rodrigo Chao",     puesto: "DEFENSOR",          imagen: "./img/Rodrigo Chao.png" }, 
  { nombre: "DAVID MÜLLER",     puesto: "VOLANTE",          imagen: "./img/David Muller.png" },
  { nombre: "NAHUEL SICA",      puesto: "VOLANTE",          imagen: "./img/Nahuel Sica.png" },
  { nombre: "JORGE FERRERO",    puesto: "VOLANTE",          imagen: "./img/Jorge Ferrero.png" },
  { nombre: "EZEQUIEL MELILLO", puesto: "VOLANTE",          imagen: "./img/Ezequien Melillo.png" },
  { nombre: "MATÍAS ROJAS",     puesto: "VOLANTE",          imagen: "./img/Matias Rojas.png" },
  { nombre: "Jonathan Belforte",puesto: "VOLANTE",          imagen: "./img/Jonatan Belforte.png" },
  { nombre: "CRISTIAN CHÁVEZ",  puesto: "DELANTERO",        imagen: "./img/Cristian Chavez.png" },
  { nombre: "Lucas Scarnato",   puesto: "DELANTERO",        imagen: "./img/Lucas Scarnato.jpg" }
];

plantilla.forEach(function (jugador) {
  var flipCard = createFlipCard(jugador.puesto, jugador.nombre,  jugador.imagen);
  cardsContainer.appendChild(flipCard);
});

seccion3.appendChild(title);
seccion3.appendChild(cardsContainer);

// Agregar las secciones al elemento main
main.appendChild(seccion2);
main.appendChild(seccion3);

// Agregar el elemento main al body
document.body.appendChild(main);

// Función para crear una tarjeta de información
function createCard(title, content) {
  var card = document.createElement("div");
  card.id = "card";

  var front = document.createElement("div");
  front.classList.add("front");

  var h1 = document.createElement("h1");
  h1.id = "card-front-title";
  h1.textContent = title;

  var back = document.createElement("div");
  back.classList.add("back");

  var p = document.createElement("p");
  p.textContent = content;

  front.appendChild(h1);
  back.appendChild(p);
  card.appendChild(front);
  card.appendChild(back);

  return card;
}

// Función para crear una tarjeta de la plantilla
function createFlipCard(nombre, puesto, imagen) {
  var flipCard = document.createElement("div");
  flipCard.classList.add("flip-card");

  var flipCardInner = document.createElement("div");
  flipCardInner.classList.add("flip-card-inner");

  var flipCardFront = document.createElement("div");
  flipCardFront.classList.add("flip-card-front");

  var h1 = document.createElement("h1");
  h1.textContent = nombre;

  var h4 = document.createElement("h4");
  h4.textContent = puesto;

  var flipCardBack = document.createElement("div");
  flipCardBack.classList.add("flip-card-back");

  var img = document.createElement("img");
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


// Crear la sección 4 del footer dinámicamente
const seccion4 = document.createElement("section");
seccion4.id = "seccion-4";
seccion4.classList.add("footer");

const container4 = document.createElement("div");
container4.classList.add("container-fluid");

const row = document.createElement("div");
row.classList.add("row");
row.style.width = "100%";

const positionRelative = document.createElement("div");
positionRelative.classList.add("position-relative");

const h4 = document.createElement("h4");
h4.classList.add("email-footer");
const emailLink = document.createElement("a");
emailLink.href = "https://login.live.com/login.srf?wa=wsignin1.0&rpsnv=13&ct=1680552062&rver=7.0.6737.0&wp=MBI_SSL&wreply=https%3a%2f%2foutlook.live.com%2fowa%2f0%2f%3fstate%3d1%26redirectTo%3daHR0cHM6Ly9vdXRsb29rLmxpdmUuY29tL21haWwvMC8%26nlp%3d1%26RpsCsrfState%3db4cc73cb-eaeb-1feb-9823-ec3da14f681a&id=292841&aadredir=1&CBCXT=out&lw=1&fl=dob%2cflname%2cwld&cobrandid=90015";
emailLink.target = "_blank";
emailLink.textContent = "info@clubatleticosanmiguel.com";
h4.appendChild(emailLink);

const h2_1 = document.createElement("h2");
h2_1.classList.add("copyrght-footer");
h2_1.textContent = "© Derechos de autor 2023. Todos los derechos reservados.";

const h2_2 = document.createElement("h2");
h2_2.classList.add("instagram-footer");
const instagramLink = document.createElement("a");
instagramLink.href = "https://www.instagram.com/oficial.casm/";
instagramLink.target = "_blank";
instagramLink.textContent = "Instagram";
h2_2.appendChild(instagramLink);

const h2_3 = document.createElement("h2");
h2_3.classList.add("facebook-footer");
const facebookLink = document.createElement("a");
facebookLink.href = "https://www.facebook.com/sanmiguel.prensa/";
facebookLink.target = "_blank";
facebookLink.textContent = "Facebook";
h2_3.appendChild(facebookLink);

const h2_4 = document.createElement("h2");
h2_4.classList.add("twitter-footer");
const twitterLink = document.createElement("a");
twitterLink.href = "https://twitter.com/oficial_casm?s=11&t=hBsm0LKSzTWt-VpvGfIhvQ";
twitterLink.target = "_blank";
twitterLink.textContent = "Twitter";
h2_4.appendChild(twitterLink);

const h5 = document.createElement("h5");
h5.classList.add("propiedad-footer");
const desarrolladorLink = document.createElement("a");
desarrolladorLink.href = "https://gonzal11t0.github.io/Portfolio/";
desarrolladorLink.target = "_blank";
desarrolladorLink.textContent = "Desarrollador Gonzalo Lazarte";
h5.appendChild(desarrolladorLink);

positionRelative.appendChild(h4);
positionRelative.appendChild(h2_1);
positionRelative.appendChild(h2_2);
positionRelative.appendChild(h2_3);
positionRelative.appendChild(h2_4);
positionRelative.appendChild(h5);

row.appendChild(positionRelative);
container4.appendChild(row);
seccion4.appendChild(container4);

// Agregar la sección 4 del footer al documento
document.body.appendChild(seccion4);


/* BUTTON INDEX */

const buttonIndex=document.createElement("button");
buttonIndex.className ="index";

const aButtonIndex=document.createElement("a");
aButtonIndex.className = "index";
aButtonIndex.href = "#";

const buttonText = document.createTextNode("Ir arriba");
aButtonIndex.className = "subir";
aButtonIndex.appendChild(buttonText);


buttonIndex.appendChild(aButtonIndex);

document.body.appendChild(buttonIndex);



/*boton ir arriba index*/
buttonIrArriba.addEventListener("abajo", function() {
  // Desplazamiento suave hasta la parte superior
  window.scrollTo({
      top: 0,
      behavior: "smooth"
  });
});



setTimeout(function() {
  var mensajeContainer = document.getElementById("mensaje-container");

  var mensaje = document.createElement("div");
  mensaje.className = "mensaje";
  mensaje.textContent = "Buscate en la tribuna";

  mensajeContainer.appendChild(mensaje);

  setTimeout(function() {
    mensaje.classList.add("mensaje-activo");
  }, 100);

  mensaje.addEventListener("click", function() {
    window.open("https://drive.google.com/drive/folders/1KzmPP6HWnS2-QyH6T20NP7PcRJ2fBTi5", "_blank");
  });

  setTimeout(function() {
    mensaje.classList.add("mensaje-oculto");
    setTimeout(function() {
      mensajeContainer.removeChild(mensaje);
    }, 500);
  }, 20000);
}, 5000);


