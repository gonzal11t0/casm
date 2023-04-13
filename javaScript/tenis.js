/*  CATEGORIA SUPER A */
const partidosSuperA = [
    {local: "TEAM CANNING",           visitante: "MILFS ATR",                  resultado: "---" },
    {local: "MARTINEZ TENIS Y PADEL", visitante: "TCA (TENIS CLUB ARGENTINO)", resultado: "---" },
    {local: "SKOL ARANZAZU ",         visitante: "HAY EQUIPO",                 resultado: "---" },
    {local: "LAS VIKINGAS",           visitante: "LEJANO OESTE",               resultado: "---" }
];

const fixtureTableSuperA = document.querySelector('#fixture-tableSuperA tbody');
for(let i = 0; i < partidosSuperA.length; i++) {
    const partido = partidosSuperA[i];
    const row = document.createElement('tr');

    const local = document.createElement('td');
        local.textContent = partido.local;
        row.appendChild(local);

    const resultado = document.createElement('td');
        resultado.textContent = partido.resultado;
        row.appendChild(resultado);

    const visitante = document.createElement('td');
        visitante.textContent = partido.visitante;
        row.appendChild(visitante);

        fixtureTableSuperA.appendChild(row);
}

/*  CATEGORIA A1 */
const partidosCATEGORIAA1 = [
    {local: "PILARA A",          visitante: "LAS WOMEN DEL 4X3",  resultado: "---" },
    {local: "CLUB NEWMAN",       visitante: "RINCON DE MARTINEZ", resultado: "---" },
    {local: "CAMPOS DE ALVAREZ", visitante: "DTENIS VINTAGE",     resultado: "---" },
    {local: "TOP TENIS",         visitante: "BUENAVISTA",         resultado: "---" }
];

const fixtureCATEGORIAA1 = document.querySelector('#fixture-tableCATEGORIAA1 tbody');
for(let i = 0; i < partidosCATEGORIAA1 .length; i++) {
    const partido = partidosCATEGORIAA1 [i];
    const row = document.createElement('tr');

    const local = document.createElement('td');
        local.textContent = partido.local;
        row.appendChild(local);

    const resultado = document.createElement('td');
        resultado.textContent = partido.resultado;
        row.appendChild(resultado);

    const visitante = document.createElement('td');
        visitante.textContent = partido.visitante;
        row.appendChild(visitante);

        fixtureCATEGORIAA1.appendChild(row);
}