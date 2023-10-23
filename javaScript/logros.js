var main = document.createElement("main");

var seccion1 = document.createElement("section");
seccion1.id = "seccion-1-logros";

var divContainer = document.createElement("div");
divContainer.className = "logros-container";

var buttonIrArriba = document.createElement("button");
buttonIrArriba.className = "index-historia";

var textoButtonIrArriba = document.createElement("a");
textoButtonIrArriba.className = "subir";
textoButtonIrArriba.textContent = "Ir arriba";
textoButtonIrArriba.href = "./logros.html";
buttonIrArriba.addEventListener("click", function() {
    // Desplazamiento suave hasta la parte superior
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

buttonIrArriba.appendChild(textoButtonIrArriba);


var logros = [
    {
        tituloLogros:"Campeonato apertura 2023",
        textoLogros:"El Lunes 29 de mayo SAN MIGUEL se consagró campeón del torneo Apertura de la Primera B de fútbol, tras el empate de Comunicaciones ante UAI Urquiza por 1-1, como visitante. De este modo, San Miguel, que ayer venció a Villa San Carlos por 1 a 0 con gol de Francisco Manenti, se quedó con el Apertura a una fecha de su finalización, debido a que suma 30 puntos, 4 más que Comunicaciones, cuando quedan sólo tres unidades en juego. San Miguel, dirigido por el Sapito Gustavo Coleoni, se quedó con el Apertura y, mínimamente, jugará una final con el vencedor del Clausura(Talleres RdE) para definir el ascenso a la Primera Nacional, mientras que de quedarse también con el segundo certamen, promocionará directamente."
    },
    {
        tituloLogros: "Ascenso a Primera B (2016/17)",
        textoLogros: "El 29 de julio de 2017 San Miguel logra en Zárate el ascenso a la Primera B venciendo a Defensores Unidos por 2 tantos contra 1.San Miguel volvió a la tercera categoría después de 14 años. Finalizó la etapa regular en la sexta posición con 57 puntos, producto de 14 triunfos, 15 empates y 9 derrotas."
    },
    {
        tituloLogros: "Resurgimiento. Ascenso a Primera C (2014)",
        textoLogros: "San Miguel vuelve a un ascenso luego de 17 años ganando el reducido de la Primera D.El partido de ida de la final se había jugado el 6 de diciembre en el Estadio de Fénix, con un resultado de 2-0 a favor de Leandro N. Alem. A pesar de esto, el 13 de diciembre de 2014 San Miguel logró la vuelta a la Primera C, venciendo 2-0 a su rival y forzando la definición por penales, la cual ganó 6-5. Así, en el Estadio Malvinas Argentinas el Trueno Verde ascendió, tras haber pasado un año y medio en la última categoría."
    },
    {
        tituloLogros: "Copa de Las Competencias Copa La Prensa",
        textoLogros: "En 1926 gana su primer título oficial de la AAF. La Copa se llamó Copa de Las Competencias Copa La Prensa, correspondiente al tercer nivel de AFA ya que solo competían los clubes de esa categoría. La primera final fue empate 1-1 y la segunda ganó San Miguel por 4-1 a Florida."
    },
    {
        tituloLogros: "Copa de Las Competencias Copa La Prensa",
        textoLogros: "En 1932 asciende por primera vez en su historia a la máxima categoría de ascenso. Su estreno fue en el Grupo A de Segunda División 1933 y finalizó en la tercera ubicación, con algunas chances de pelear por el ascenso a Primera División."
    },
    {
        tituloLogros: "PRIMER ASCENSO PRIMERA C",
        textoLogros: "El primer ascenso fue en 1979 a Primera C, cuando salió campeón de la última categoría de AFA, el partido se jugó en el Malvinas Argentinas y San Miguel salió Campeón en su segundo año disputando torneos de AFA."
    }
];

logros.forEach(function(logro) {
    var divLogros = document.createElement("div");
    divLogros.className = "logros";

    var tituloLogros = document.createElement("h2");
    tituloLogros.className = "titulo-logros";
    tituloLogros.textContent = logro.tituloLogros;

    var textoLogros = document.createElement("p");
    textoLogros.className = "texto-logros";
    textoLogros.textContent = logro.textoLogros;

    divLogros.appendChild(tituloLogros);
    divLogros.appendChild(textoLogros);
    divContainer.appendChild(divLogros);
});

seccion1.appendChild(divContainer);
seccion1.appendChild(buttonIrArriba);
main.appendChild(seccion1);

document.body.appendChild(main);
