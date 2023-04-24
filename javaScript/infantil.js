/*TABLA DE POSICIONES INFANTIL*/
// Obtener la tabla y las filas
var tabla = document.getElementById("tabla-posiciones-infantil");
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
}/*
const partidos = [
    {fecha: "10 de Febrero",local: "Dep. Morón",     visitante: "Dep. Riestra",   resultado: "4-1" },
    {fecha: "11 de Febrero",local: "Comunicaciones ",visitante: "Colegiales",     resultado: "1-0" },
    {fecha: "11 de Febrero",local: "Talleres(R.E) ", visitante: "Villa Don Bosco",resultado: "2-0" },
    {fecha: "11 de Febrero",local: "All Boys",       visitante: "San Miguel",     resultado: "1-1" },
    {fecha: "11 de Febrero",local: "Alte.Brown",     visitante: "Los Andes",      resultado: "3-0" },
    {fecha: "11 de Febrero",local: "Atlanta",        visitante: "Real Pilar F.C", resultado: "0-3" },
    {fecha: "1 de Febrero", local: "Franja de Oro",  visitante: "D 10 F.C",       resultado: "1-2" },
    {fecha: "1 de Febrero", local: "Berazategui",    visitante: "L.N. Alem",      resultado: "0-0" },
    {fecha: "1 de Febrero", local: "Villa Dálmine",  visitante: "Dep. Armenio",   resultado: "1-2" },
    {fecha: "1 de Febrero", local: "Estudiantes",    visitante: "Barracas Ctral", resultado: "0-0" }
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
}
*/