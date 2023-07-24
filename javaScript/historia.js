var main=document.createElement("main");

var seccion1 = document.createElement("section");
seccion1.id = "seccion-1-historia";

var divContainer = document.createElement("div");
divContainer.className = "historia-container";

var divHistoria = document.createElement("div");
divHistoria.className = "historia";

var tituloHistoria = document.createElement("h2");

tituloHistoria.className = "titulo-historia";

tituloHistoria.textContent = "Club Atlético San Miguel";

const textoHistoriaParte1 = `Fue fundado el 7 de agosto de 1922 con la denominación Club Independiente San Miguel. Inicialmente utilizó una camiseta azul y blanca, pero luego se cambiaron a los colores actuales: camiseta verde y blanca, pantalón azul y medias negras con ribetes verdes. En 1927 se produce la anteúltima fusión de asociaciones y todos los equipos debieron reinscribirse (imagen de 1927) para esta nueva entidad, esto produjo que se reordenaran las categorías y San Miguel pasara a competir en una divisional más abajo. En 1928 ascendió nuevamente al tercer nivel del fútbol argentino, por ese entonces la categoría era nombrada como Intermedia.En 1930 se fusionó con el Club Germinal de Villa Lynch, pero al cabo de un año la fusión se disolvió y cambió el nombre al actual Club Atlético San Miguel.Cinco años después adquirió la propiedad donde actualmente se encuentra la sede social.Además del fútbol profesional tiene otras actividades como: Fútbol Infantil y Juvenil, Tenis, Hockey, Vóley, Básquet, Futsal, Natación, Gimnasia, Danza, Boxeo, Artes Marciales, Bochas y otras más. `;
const textoHistoriaParte2 = `También cuenta con un instituto académico, con los tres niveles básicos de educación (Jardín de Infantes, Escuela Primaria y Secundaria)Su estadio lleva el nombre de Malvinas Argentinas y tiene una capacidad de 7096 espectadores.El 4 de agosto de 2022 se anunció el levantamiento de la quiebra del club, la cual se había originado hacía 16 años. En los próximos meses se espera el llamado a elecciones para elegir las nuevas autoridades. El CASM había entrado en quiebra en 2006, pero no se disolvió, entonces fue juzgado e intervenido por la jueza Gladys Saldúa que designó como responsable del club a Carlos Antonio Gallo y del área futbolística a Juan Carlos Bravo.San Miguel se consagra campeón de la Primera C gracias a una gran campaña y de esta manera logra por primera vez en su historia el ascenso a la segunda categoría.Luego del ascenso a Primera B, en 1984, al año siguiente obtiene el apodo Trueno Verde (idea de los periodistas Juan Carlutti y Gastón Rissiardi) cuando el equipo era dirigido por Rubén Glaría. Ese equipo estuvo muy cerca de jugar en la máxima categoría, donde fue subcampeón escoltando a Rosario Central y llegó a la semifinal del octogonal por el segundo ascenso. En este campeonato obtuvo importantes victorias por 2 a 1 frente a Racing Club y el campeón Rosario Central. El club terminó tercero en recaudaciones aquel año, por detrás de la "Academia" y el "Canalla", justamente.San Miguel consigue el ascenso ganando el reducido de la Primera B frente a Dock Sud por 3 a 1 en el estadio de Platense. La ida se había jugado la semana previa en el Estadio Ciudad de Caseros y con un resultado de 1-1.A comienzos de la década del 2000, San Miguel a través de malos manejos dirigenciales entra en una profunda crisis económica que le provocaría dos descensos en apenas dos años (2001 y 2003) y que años más tarde lo llevaría a la intervención de la institución por presentarse un pedido de quiebra. Ya en la Primera C, el "Trueno", lejos de volver a la categoría superior, obtiene muy malos resultados que, impensadamente, lo llevan a disputar la promoción por el descenso a la Primera D en dos oportunidades (2005 ante Liniers y 2007 ante Berazategui). En ambos casos mantiene la categoría, aunque en la temporada 2012/13 se vuelve a ver comprometido con los promedios y tocó fondo al descender a la D tras perder un desempate disputado contra Luján.`;
var textoCompleto = document.createElement("p");

textoCompleto.className = "texto-historia";

textoCompleto.textContent = textoHistoriaParte1 + textoHistoriaParte2;

var buttonIrArriba = document.createElement("button");

buttonIrArriba.className = "index-historia";

var textoButtonIrArriba = document.createElement("a");
textoButtonIrArriba.className = "subir";
textoButtonIrArriba.textContent = "Ir arriba";
textoButtonIrArriba.href = "./historia.html";

buttonIrArriba.addEventListener("click", function() {
    // Desplazamiento suave hasta la parte superior
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

buttonIrArriba.appendChild(textoButtonIrArriba);

divHistoria.appendChild(tituloHistoria);
divHistoria.appendChild(textoCompleto);
divContainer.appendChild(divHistoria);
seccion1.appendChild(divContainer);
seccion1.appendChild(buttonIrArriba);
main.appendChild(seccion1);
document.body.appendChild(main);
