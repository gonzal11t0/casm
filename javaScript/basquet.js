// Obtener la tabla y las filas
var tabla = document.getElementById("tabla-posiciones-primera");
var filas = tabla.getElementsByTagName("tr");

// Ordenar las filas por puntos
var puntosArray = [];
for (var i = 1; i < filas.length; i++) {
    var celdas = filas[i].getElementsByTagName("td");
    var puntos = parseInt(celdas[4].textContent);
    puntosArray.push([puntos, filas[i]]);
}
puntosArray.sort(function(a, b) {
    return b[0] - a[0];
});

// Actualizar el orden de las filas
for (var i = 0; i < puntosArray.length; i++) {
    tabla.appendChild(puntosArray[i][1]);
}
$(filas[1]).css("background-color", "green");
$(filas[i]).css("background-color", "red");



var dropdown = document.querySelector(".dropdown-propio");
dropdown.addEventListener("click", function() {
    this.querySelector(".dropdown-menu").classList.toggle("show");
});