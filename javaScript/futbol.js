// Obtener la tabla y las filas
var tabla = document.getElementById("tabla-posiciones");
var filas = tabla.getElementsByTagName("tr");

// Ordenar las filas por puntos
var puntosArray = [];
for (var i = 1; i < filas.length; i++) {
    var celdas = filas[i].getElementsByTagName("td");
    var puntos = parseInt(celdas[8].textContent);
    puntosArray.push([puntos, filas[i]]);
}
puntosArray.sort(function(a, b) {
    return b[0] - a[0];
});

// Actualizar el orden de las filas
for (var i = 0; i < puntosArray.length; i++) {
    tabla.appendChild(puntosArray[i][1]);
}

function agregarPartidos(partidos) {
    const tbody = document.querySelector('table tbody');
    partidos.forEach(partido => {
      const fila = document.createElement('tr');
      fila.innerHTML = `
        <td>${partido.fecha}</td>
        <td>${partido.equipoLocal}</td>
        <td>${partido.equipoVisitante}</td>
        <td>${partido.estadio}</td>
      `;
      
      tbody.appendChild(fila);
    });
  }
  document.addEventListener('DOMContentLoaded', () => {
    const partidos = [
      {
        fecha: '01/05/2023',
        equipoLocal: 'Boca Juniors',
        equipoVisitante: 'River Plate',
        estadio: 'La Bombonera'
      },
      {
        fecha: '08/05/2023',
        equipoLocal: 'San Lorenzo',
        equipoVisitante: 'Huracán',
        estadio: 'El Nuevo Gasómetro'
      },
      // Agrega aquí más partidos
    ];
    
    agregarPartidos(partidos);
  });
    