function ordenarTabla(){
// Obtener la tabla y las filas
var tabla = document.getElementById("tabla-posiciones-juveniles");
var filas = tabla.getElementsByTagName("tr");

// Ordenar las filas por puntos
var puntosArray = [];
for (var i = 1; i < filas.length; i++) {
    var celdas = filas[i].getElementsByTagName("td");
    var puntos = parseInt(celdas[5].textContent);
    puntosArray.push([puntos, filas[i]]);
}

puntosArray.sort(function(a, b) {
    return b[0] - a[0];
});

// Actualizar el orden de las filas y resaltar la última y primera
for (var i = 0; i < puntosArray.length; i++) {
    var fila = puntosArray[i][1];
    if (i === 0) {
        fila.classList.add("green"); // Resaltar el primer equipo en verde
    } else if (i === puntosArray.length - 1) {
        fila.classList.add("red"); // Resaltar el último equipo en rojo
    }
    tabla.appendChild(fila);
}
};
ordenarTabla()