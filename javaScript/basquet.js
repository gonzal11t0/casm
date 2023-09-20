function tablaPosiciones(){
    // Obtener la tabla y las filas
var tabla = document.getElementById("tabla-posiciones-basquet");
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
function colorUltimoPrimero(){
    $(filas[1]).css("background-color", "green");
    $(filas[i]).css("background-color", "red");
};
colorUltimoPrimero();

}
tablaPosiciones();


function arrancarDataTableBasquet () {  
        $('#fixture-table-basquet').DataTable({
            info: false,
            paging: true,
            "lengthChange": false,
            "pagingType": "numbers",
            "searching": false,
            "pageLength": 3,
            "aaSorting": false
        });
}
arrancarDataTableBasquet ();

function arrancarDataTablePlayOffBasquet () {  
    $('#fixture-table-basquet-playOff').DataTable({
        info: false,
        paging: true,
        "lengthChange": false,
        "pagingType": "numbers",
        "searching": false,
        "pageLength":5,
        "aaSorting": false
    });
}
arrancarDataTablePlayOffBasquet ();

function arrancarDataTableConferencia1 () {  
    $('#fixture-table-basquet-conferencia1').DataTable({
        info: false,
        paging: true,
        "lengthChange": false,
        "pagingType": "numbers",
        "searching": false,
        "pageLength":4,
        "aaSorting": false
    });
}
arrancarDataTableConferencia1 ();

function arrancarDataTableU17 () {  
    $('#fixture-table-basquet').DataTable({
        info: false,
        paging: true,
        "lengthChange": false,
        "pagingType": "numbers",
        "searching": false,
        "pageLength":5,
        "aaSorting": false
    });
}
arrancarDataTableConferencia3U17();

function arrancarDataTableConferencia3U17 () {  
    $('#conferencia3-fixture-table-basquet-u17').DataTable({
        info: false,
        paging: true,
        "lengthChange": false,
        "pagingType": "numbers",
        "searching": false,
        "pageLength":4,
        "aaSorting": false
    });
}
arrancarDataTableConferencia3U17();



