
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

/*
const partidos = [
    {fecha: "10 de Febrero",local: "Dock Sud",      visitante: "Dep. Armenio",    resultado: "4-1" },
    {fecha: "11 de Febrero",local: "Cañuelas",      visitante: "Ituzaingo",       resultado: "1-0" },
    {fecha: "11 de Febrero",local: "UAI Urquiza",   visitante: "Merlo",           resultado: "2-0" },
    {fecha: "11 de Febrero",local: "Acassuso",      visitante: "Argentino (Q)",   resultado: "1-1" },
    {fecha: "11 de Febrero",local: "Argentino (M)", visitante: "Colegiales	",    resultado: "3-0" },
    {fecha: "11 de Febrero",local: "Sacachispas",   visitante: "San Miguel	",    resultado: "0-3" },
    {fecha: "1 de Febrero", local: "Fenix",         visitante: "Villa San Carlos",resultado: "1-2" },
    {fecha: "1 de Febrero", local: "Talleres (RdE)",visitante: "Los Andes",       resultado: "0-0" },
];

const fixtureTable = document.querySelector('#fixture-table tbody');

for(let i = 0; i < partidos.length; i++) {
    const partido = partidos[i];
    const row = document.createElement('tr');

    
    const fecha = document.createElement('td');
        fecha.textContent = partido.fecha;
        row.appendChild(fecha);

    const local = document.createElement('td');
        local.textContent = partido.local;
        row.appendChild(local);


    const resultado = document.createElement('td');
        resultado.textContent = partido.resultado;
        row.appendChild(resultado);

    const visitante = document.createElement('td');
        visitante.textContent = partido.visitante;
        row.appendChild(visitante);


        fixtureTable.appendChild(row);
}*/
var dropdown = document.querySelector(".dropdown-propio");

dropdown.addEventListener("click", function() {
    this.querySelector(".dropdown-menu").classList.toggle("show");
});