// Obtener la tabla y las filas
var tabla = document.getElementById("tabla-posiciones-primera");
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

// Actualizar el orden de las filas
for (var i = 0; i < puntosArray.length; i++) {
    tabla.appendChild(puntosArray[i][1]);
}

$(filas[1]).css("background-color", "green");

$(filas[i]).css("background-color", "red");

var dropdown = document.querySelector(".dropdown-propio");

setTimeout(function(){
    var cajetillaPrensa=document.getElementById("cajetillaPrensa");
    var cajetilla=document.createElement("div");
    cajetilla.className="mensaje";
    cajetilla.textContent="Cajetilla de prensa";
    cajetillaPrensa.appendChild(cajetilla);

    setTimeout(function() {
        cajetilla.classList.add("mensaje-activo");
    }, 100);
    
    cajetilla.addEventListener("click", function() {
        window.open("https://drive.google.com/drive/folders/1KzmPP6HWnS2-QyH6T20NP7PcRJ2fBTi5", "_blank");
    });
    
    setTimeout(function() {
        cajetilla.classList.add("mensaje-oculto");
        setTimeout(function() {
            cajetillaPrensa.removeChild(cajetilla);
    }, 700);
    }, 15000);
},4000);



function arrancarDataTablePrimera(){
    $(document).ready(function () {
        $('#fixture-table-primera').DataTable({
            info:false,
            paging:true,
            "lengthChange":false,
            "pagingType": "numbers",
            "searching": false,
            "pageLength":8,
            "aaSorting":false
        })
    });
}
arrancarDataTablePrimera()

function arrancarDataTablePrimeraFinal(){
    $(document).ready(function () {
        $('#fixture-final-reducido-primera').DataTable({
            info:false,
            paging:true,
            "lengthChange":false,
            "pagingType": "numbers",
            "searching": false,
            "pageLength":1,
            "aaSorting":false
        })
    });
}
arrancarDataTablePrimeraFinal()


function arrancarDataTableReducido(){
    $(document).ready(function () {
        $('#fixture-reducido-primera').DataTable({
            info:false,
            paging:true,
            "lengthChange":false,
            "pagingType": "numbers",
            "searching": false,
            "pageLength":3,
            "aaSorting":false
        })
    });
}
arrancarDataTableReducido()