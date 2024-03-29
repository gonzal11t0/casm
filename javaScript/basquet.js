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




function arrancarDataTableU17 () {  
    $('#fixture-table-basquet-u17').DataTable({
        info: false,
        paging: true,
        "lengthChange": false,
        "pagingType": "numbers",
        "searching": false,
        "pageLength":5,
        "aaSorting": false
    });
}
arrancarDataTableU17 ()

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

function arrancarDataTableConferencia3U17PlayOff() {  
    $('#conferencia3-fixture-table-basquet-u17-playOff').DataTable({
        info: false,
        paging: true,
        "lengthChange": false,
        "pagingType": "numbers",
        "searching": false,
        "pageLength":2,
        "aaSorting": false
    });
}
arrancarDataTableConferencia3U17PlayOff();

function arrancarDataTableConferencia1U15PlayOff() {  
    $('#conferencia1-fixture-table-basquet-u15-playOff').DataTable({
        info: false,
        paging: true,
        "lengthChange": false,
        "pagingType": "numbers",
        "searching": false,
        "pageLength":4,
        "aaSorting": false
    });
}
arrancarDataTableConferencia1U15PlayOff();

function arrancarDataTableConferencia1U13PlayOff() {  
    $('#conferencia1-fixture-table-basquet-u13-playOff').DataTable({
        info: false,
        paging: true,
        "lengthChange": false,
        "pagingType": "numbers",
        "searching": false,
        "pageLength":4,
        "aaSorting": false
    });
}
arrancarDataTableConferencia1U13PlayOff();


function arrancarDataTableConferencia1U12PlayOff() {  
    $('#conferencia1-fixture-table-basquet-u12-playOff').DataTable({
        info: false,
        paging: true,
        "lengthChange": false,
        "pagingType": "numbers",
        "searching": false,
        "pageLength":4,
        "aaSorting": false
    });
}
arrancarDataTableConferencia1U12PlayOff();

function arrancarDataTableU41PlayOff() {  
    $('#fixture-table-basquet-u41-playOff').DataTable({
        info: false,
        paging: true,
        "lengthChange": false,
        "pagingType": "numbers",
        "searching": false,
        "pageLength":2,
        "aaSorting": false
    });
}
arrancarDataTableU41PlayOff();