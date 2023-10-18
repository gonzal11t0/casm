// Función para ordenar y resaltar filas en una tabla
function ordenarYResaltarTabla(tableId) {
    var tabla = document.getElementById(tableId);
    var filas = tabla.getElementsByTagName("tr");

    var puntosArray = [];
    for (var i = 1; i < filas.length; i++) {
        if (i < 6) {
        } else if (i >= filas.length - 4) {
            // Las últimas 4 filas son rojas
            filas[i].classList.add("red");
        } else {
            filas[i].classList.remove("red"); // Asegurarse de eliminar cualquier resaltado rojo previo
        }
        var celdas = filas[i].getElementsByTagName("td");
        var puntos = parseInt(celdas[5].textContent);
        puntosArray.push([puntos, filas[i]]);
    }
    puntosArray.sort(function (a, b) {
        return b[0] - a[0];
    });

    for (var i = 0; i < puntosArray.length; i++) {
        tabla.appendChild(puntosArray[i][1]);
    }
}

// Aplicar la función a la tabla de la fase regular
$(document).ready(function () {
    ordenarYResaltarTabla("tabla-posiciones-femenino");
    $('#fixture-table-primera-femenino').DataTable({
        info: false,
        paging: true,
        "lengthChange": false,
        "pagingType": "numbers",
        "searching": false,
        "pageLength": 10,
        "aaSorting": false
    });
});

// Aplicar la función a la tabla de la fase de permanencia
$(document).ready(function () {
    ordenarYResaltarTabla("tabla-posiciones-femenino-fase-permanencia");
    $('#fixture-table-femenino-permanencia').DataTable({
        info: false,
        paging: true,
        "lengthChange": false,
        "pagingType": "numbers",
        "searching": false,
        "pageLength": 5,
        "aaSorting": false
    });
});
