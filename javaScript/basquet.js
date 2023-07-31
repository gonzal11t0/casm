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


function arrancarDataTable () {  
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
arrancarDataTable ();


function mostrarPlayOffOriginal(){
// Obtener una referencia al botón
var botonVerPlayoff = document.getElementById("botonVerPlayoff");

// Obtener una referencia al contenedor principal

var posicionesPrincipal = document.getElementById("principal-basquet-posiciones");
var fixturePlayoff=document.getElementById("principal-basquet-fixure");

// Definir una variable para almacenar el estado del contenido
var datosMostrados = false;
var TablaPosicionesOriginalHTML = `
<div id="principal-primera-posiciones" >
<table id="tabla-posiciones-primera"class="table table-active table-responsive table-responsive-lg table-responsive-md table-responsive-sm table-sm">
    <thead>
        <tr>
            <th>Equipo</th>
            <th>PJ</th>
            <th>PG</th>
            <th>PP</th>
            <th>Pts</th>
        </tr>
    </thead>
    <tbody id="tbody">
        <tr data-row-index="1">
            <td>RIVER PLATE<img id="img-basquet-u23m" src="./img/iconos-clubes/river.jpg"></td> 
            <td>10</td>
            <td>79</td>
            <td>1</td>
            <td>19</td>
        </tr>
        <tr data-row-index="2">
            <td>PLATENSE MARRON<img id="img-basquet-u23m" src="./img/iconos-clubes/platence.jpg"></td>
            <td>10</td>
            <td>8</td>
            <td>2</td>
            <td>18</td>
        </tr>
        <tr data-row-index="3">
            <td>UNION VECINAL DE MUNRO<img id="img-basquet-u23m" src="./img/iconos-clubes/union vecinal munro.jpg"></td>
            <td>10</td>
            <td>4</td>
            <td>6</td>
            <td>14</td>
        </tr>
        <tr data-row-index="4">
            <td>VICTORIA<img  id="img-basquet-u23m" src="./img/iconos-clubes/victoria.jpg" ></td>
            <td>10</td>
            <td>2</td>
            <td>8</td>
            <td>12</td>
        </tr>
        <tr data-row-index="5">
            <td>SAN MIGUEL<img id="img-basquet-u23m" src="./img/iconos-clubes/san miguel.png"></td>
            <td>10</td>
            <td>4</td>
            <td>6</td>
            <td>14</td>
        </tr>
        <tr data-row-index="6">
            <td>SPORTIVO VILLA BALLESTER<img id="img-basquet-u23m" src="./img/iconos-clubes/SPORTIVO VILLA BALLESTER.jpg"></td>
            <td>10</td>
            <td>3</td>
            <td>7</td>
            <td>13</td>
        </tr>
    </tbody>
</table>
</div>
`;
var fixtureOriginalHTML = `
    
<div id="principal-primera-fixure">
<table id="fixture-table-primera"  class="table table-striped table-responsive table-responsive-lg" >
    <thead>
        <tr>
            <th>Fecha</th>
            <th>Equipo local</th>
            <th>Resultado</th>
            <th>Equipo visitante</th>
        </tr>
        </thead>
        <tbody>
            <!--FECHA 1-->
            <tr>
                <td>20/3/2023</td>
                <td>UNION VECINAL DE MUNRO</td>
                <td>70-52</td>
                <td>VICTORIA</td>
            </tr>
            <tr>
                <td>21/3/2023</td>
                <td>SPORTIVO VILLA BALLESTER</td>
                <td>67-83</td>
                <td>RIVER PLATE</td>
            </tr>
            <tr>
                <td>21/3/2023</td>
                <td>SAN MIGUEL</td>
                <td>56-91</td>
                <td>PLATENSE MARRON</td>
            </tr>
            <!--FECHA 2-->
            <tr>
                <td>28/3/2023</td>
                <td>SAN MIGUEL</td>
                <td>67-64</td>
                <td>SPORTIVO VILLA BALLESTER</td>
            </tr>
            <tr>
                <td>28/3/2023</td>
                <td>VICTORIA</td>
                <td>59-88</td>
                <td>RIVER PLATE</td>
            </tr>
            <tr>
                <td>29/3/2023</td>
                <td>PLATENSE MARRON</td>
                <td>68-65</td>
                <td>UNION VECINAL DE MUNRO</td>
            </tr>
            <!--FECHA 3-->
            <tr>
                <td>2/4/2023</td>
                <td>RIVER PLATE</td>
                <td>72-70</td>
                <td>PLATENSE MARRON</td>
            </tr>
            <tr>
                <td>3/4/2023</td>
                <td>UNION VECINAL DE MUNRO</td>
                <td>63-65</td>
                <td>SAN MIGUEL</td>
            </tr>
            <tr>
                <td>4/4/2023</td>
                <td>SPORTIVO VILLA BALLESTER</td>
                <td>57-63</td>
                <td>VICTORIA</td>
            </tr>
            <!--FECHA 4-->
            <tr>
                <td>9/4/2023</td>
                <td>PLATENSE MARRON</td>
                <td>81-55</td>
                <td>VICTORIA</td>
            </tr>
            <tr>
                <td>10/4/2023</td>
                <td>UNION VECINAL DE MUNRO</td>
                <td>77-67</td>
                <td>SPORTIVO VILLA BALLESTER</td>
            </tr>
            <tr>
                <td>11/4/2023</td>
                <td>SAN MIGUEL</td>
                <td>56-113</td>
                <td>RIVER PLATE</td>
            </tr>
            <!--FECHA 5-->
            <tr>
                <td>17/4/2023</td>
                <td>UNION VECINAL DE MUNRO</td>
                <td>61-72</td>
                <td>RIVER PLATE</td>
            </tr>
            <tr>
                <td>18/4/2023</td>
                <td>SPORTIVO VILLA BALLESTER</td>
                <td>79-74</td>
                <td>PLATENSE MARRON</td>
            </tr>
            <tr>
                <td>18/4/2023</td>
                <td>VICTORIA</td>
                <td>88-78</td>
                <td>SAN MIGUEL</td>
            </tr>
            <!--FECHA 6-->
            <tr>
                <td>24/4/2023</td>
                <td>RIVER PLATE</td>
                <td>83-74</td>
                <td>SPORTIVO VILLA BALLESTER</td>
            </tr>
            <tr>
                <td>24/4/2023</td>
                <td>PLATENSE MARRON</td>
                <td>91-62</td>
                <td>SAN MIGUEL</td>
            </tr>
            <tr>
                <td>25/4/2023</td>
                <td>VICTORIA</td>
                <td>59-62</td>
                <td>UNION VECINAL DE MUNRO</td>
            </tr>
            <!--FECHA 7-->
            <tr>
                <td>8/5/2023</td>
                <td>UNION VECINAL DE MUNRO</td>
                <td>70-86</td>
                <td>PLATENSE MARRON</td>
            </tr>
            <tr>
                <td>8/5/2023</td>
                <td>RIVER PLATE</td>
                <td>94-41</td>
                <td>VICTORIA</td>
            </tr>
            <tr>
                <td>9/5/2023</td>
                <td>SPORTIVO VILLA BALLESTER</td>
                <td>68-72</td>
                <td>SAN MIGUEL</td>
            </tr>
            <!--FECHA 8-->
            <tr>
                <td>15/5/2023</td>
                <td>PLATENSE MARRON</td>
                <td>77-71</td>
                <td>RIVER PLATE</td>
            </tr>
            <tr>
                <td>16/5/2023</td>
                <td>VICTORIA</td>
                <td>57-69</td>
                <td>SPORTIVO VILLA BALLESTER</td>
            </tr>
            <tr>
                <td>16/5/2023</td>
                <td>SAN MIGUEL</td>
                <td>52-57</td>
                <td>UNION VECINAL DE MUNRO</td>
            </tr>
            <!--FECHA 9-->
            <tr>
                <td>22/5/2023</td>
                <td>RIVER PLATE</td>
                <td>86-59</td>
                <td>SAN MIGUEL</td>
            </tr>
            <tr>
                <td>23/5/2023</td>
                <td>SPORTIVO VILLA BALLESTER</td>
                <td>73-57</td>
                <td>UNION VECINAL DE MUNRO</td>
            </tr>
            <tr>
                <td>30/5/2023</td>
                <td>VICTORIA</td>
                <td>75-79</td>
                <td>PLATENSE MARRON</td>
            </tr>
            <!--FECHA 10-->
            <tr>
                <td>6/6/2023</td>
                <td>SAN MIGUEL</td>
                <td>81-68</td>
                <td>VICTORIA</td>
            </tr>
            <tr>
                <td>5/6/2023</td>
                <td>PLATENSE MARRON</td>
                <td>75-68</td>
                <td>SPORTIVO VILLA BALLESTER</td>
            </tr>
            <tr>
                <td>6/6/2023</td>
                <td>RIVER PLATE</td>
                <td>78-58</td>
                <td>UNION VECINAL DE MUNRO</td>
            </tr>
        </tbody>
</table>
</div> 
`;
// Agregar un evento de escucha al botón
botonVerPlayoff.addEventListener("click", function() {
    if (datosMostrados){
        // Reemplazar la estructura HTML actual por la original
        posicionesPrincipal.innerHTML = TablaPosicionesOriginalHTML;
        
        fixturePlayoff.innerHTML = fixtureOriginalHTML;
        datosMostrados = false;
    }else{
    // Crear la nueva estructura HTML con los resultados deseados
    var TablaPosicionesPlayoffHTML = `
        <table id="tabla-posiciones-basquet" class="table table-active table-responsive table-responsive-lg table-responsive-md table-responsive-sm table-sm">
            <thead>
                <tr>
                    <th>Equipo</th>
                    <th>PJ</th>
                    <th>PG</th>
                    <th>PP</th>
                    <th>Pts</th>
                </tr>
            </thead>
            <tbody id="tbody">
                <tr data-row-index="1">
                    <td>Nuevo Equipo 1</td>
                    <td>10</td>
                    <td>8</td>
                    <td>2</td>
                    <td>18</td>
                </tr>
                <tr data-row-index="2">
                    <td>Nuevo Equipo 2</td>
                    <td>10</td>
                    <td>6</td>
                    <td>4</td>
                    <td>16</td>
                </tr>
                <tr data-row-index="3">
                    <td>Nuevo Equipo 3</td>
                    <td>10</td>
                    <td>6</td>
                    <td>4</td>
                    <td>16</td>
                </tr>
                <tr data-row-index="4">
                    <td>Nuevo Equipo 4</td>
                    <td>10</td>
                    <td>6</td>
                    <td>4</td>
                    <td>16</td>
                </tr>   
                <tr data-row-index="5">
                    <td>Nuevo Equipo 5</td>
                    <td>10</td>
                    <td>6</td>
                    <td>4</td>
                    <td>16</td>
                </tr>
                <!-- Más filas con los nuevos resultados -->
            </tbody>
        </table>
    `;
    var fixturePlayoffHTML=`
    <table id="fixture-table-basquet"  class="table table-striped table-responsive table-responsive-lg" >
        <thead>
            <tr>
                <th>Fecha</th>
                <th>Equipo local</th>
                <th>Resultado</th>
                <th>Equipo visitante</th>
            </tr>
        </thead>
        <tbody>
            <!--FECHA 1-->
            <tr>
                <td>26/6/2023</td>
                <td>BANCO NACION</td>
                <td>--</td>
                <td>VICTORIA</td>
            </tr>
            <tr>
                <td>26/6/2023</td>
                <td>BANADE</td>
                <td>--</td>
                <td>SPORTIVO VILLA BALLESTER</td>
            </tr>
            <tr>
                <td>26/6/2023</td>
                <td>CENTRO GALICIA</td>
                <td>--</td>
                <td>COOP DE TORTUGUITAS</td>
            </tr>
            <tr>
                <td>26/6/2023</td>
                <td>CLUB 3 DE FEBRERO</td>
                <td>--</td>
                <td>NAUTICO HACOAJ</td>
            </tr>
            <tr>
                <td>--</td>
                <td>SAN MIGUEL</td>
                <td>--</td>
                <td>Libre</td>
            </tr>
            <!--FECHA 2-->
            <tr>
                <td>3/7/2023</td>
                <td>NAUTICO HACOAJ</td>
                <td>--</td>
                <td>CENTRO GALICIA</td>
            </tr>
            <tr>
                <td>3/7/2023</td>
                <td>COOP DE TORTUGUITAS</td>
                <td>--</td>
                <td>BANADE</td>
            </tr>
            <tr>
                <td>4/7/2023</td>
                <td>SPORTIVO VILLA BALLESTER</td>
                <td>--</td>
                <td>BANCO NACION</td>
            </tr>
            <tr>
                <td>4/7/2023</td>
                <td>VICTORIA</td>
                <td>--</td>
                <td>SAN MIGUEL</td>
            </tr>
            <tr>
                <td>--</td>
                <td>CLUB 3 DE FEBRERO</td>
                <td>--</td>
                <td>Libre</td>
            </tr>
            <!--FECHA 3-->
            <tr>
                <td>10/7/2023</td>
                <td>BANCO NACION</td>
                <td>--</td>
                <td>COOP DE TORTUGUITAS</td>
            </tr>
            <tr>
                <td>10/7/2023</td>
                <td>BANADE</td>
                <td>--</td>
                <td>NAUTICO HACOAJ</td>
            </tr>
            <tr>
                <td>10/7/2023</td>
                <td>CENTRO GALICIA</td>
                <td>--</td>
                <td>CLUB 3 DE FEBRERO</td>
            </tr>
            <tr>
                <td>11/7/2023</td>
                <td>SAN MIGUEL</td>
                <td>--</td>
                <td>SPORTIVO VILLA BALLESTER</td>
            </tr>
            <tr>
                <td>--</td>
                <td>VICTORIA</td>
                <td>--</td>
                <td>Libre</td>
            </tr>
            <!--FECHA 4-->
            <tr>
                <td>17/7/2023</td>
                <td>CLUB 3 DE FEBRERO</td>
                <td>--</td>
                <td>BANADE</td>
            </tr>
            <tr>
                <td>17/7/2023</td>
                <td>NAUTICO HACOAJ</td>
                <td>--</td>
                <td>BANCO NACION</td>
            </tr>
            <tr>
                <td>17/7/2023</td>
                <td>COOP DE TORTUGUITAS</td>
                <td>--</td>
                <td>SAN MIGUEL</td>
            </tr>
            <tr>
                <td>18/7/2023</td>
                <td>SPORTIVO VILLA BALLESTER</td>
                <td>--</td>
                <td>VICTORIA</td>
            </tr>
            <tr>
                <td>--</td>
                <td>CENTRO GALICIA</td>
                <td>--</td>
                <td>Libre</td>
            </tr>
            <!--FECHA 5-->
            <tr>
                <td>31/7/2023</td>
                <td>BANADE</td>
                <td>--</td>
                <td>CENTRO GALICIA</td>
            </tr>   
            <tr>
                <td>1/8/2023</td>
                <td>VICTORIA</td>
                <td>--</td>
                <td>COOP DE TORTUGUITAS</td>
            </tr>
            <tr>
                <td>1/8/2023</td>
                <td>SAN MIGUEL</td>
                <td>--</td>
                <td>NAUTICO HACOAJ</td>
            </tr>
            <tr>
                <td>1/8/2023</td>
                <td>BANCO NACION</td>
                <td>--</td>
                <td>CLUB 3 DE FEBRERO</td>
            </tr>
            <tr>
                <td>--</td>
                <td>SPORTIVO VILLA BALLESTER</td>
                <td>--</td>
                <td>Libre</td>
            </tr>
            <!--FECHA 6-->
            <tr>
                <td>7/7/2023</td>
                <td>CENTRO GALICIA</td>
                <td>--</td>
                <td>BANCO NACION</td>
            </tr>   
            <tr>
                <td>7/8/2023</td>
                <td>CLUB 3 DE FEBRERO</td>
                <td>--</td>
                <td>SAN MIGUEL</td>
            </tr>
            <tr>
                <td>7/8/2023</td>
                <td>NAUTICO HACOAJ</td>
                <td>--</td>
                <td>VICTORIA</td>
            </tr>
            <tr>
                <td>7/8/2023</td>
                <td>COOP DE TORTUGUITAS</td>
                <td>--</td>
                <td>SPORTIVO VILLA BALLESTER</td>
            </tr>
            <tr>
                <td>--</td>
                <td>BANADE</td>
                <td>--</td>
                <td>Libre</td>
            </tr>
            <!--FECHA 7-->
            <tr>
                <td>14/8/2023</td>
                <td>BANCO NACION</td>
                <td>--</td>
                <td>BANADE</td>
            </tr>
            <tr>
                <td>15/8/2023</td>
                <td>SPORTIVO VILLA BALLESTER</td>
                <td>--</td>
                <td>NAUTICO HACOAJ</td>
            </tr>   
            <tr>
                <td>15/8/2023</td>
                <td>VICTORIA</td>
                <td>--</td>
                <td>CLUB 3 DE FEBRERO</td>
            </tr>
            <tr>
                <td>15/8/2023</td>
                <td>SAN MIGUEL</td>
                <td>--</td>
                <td>CENTRO GALICIA</td>
            </tr>
            <tr>
                <td>--</td>
                <td>COOP DE TORTUGUITAS</td>
                <td>--</td>
                <td>Libre</td>
            </tr>
            <!--FECHA 8-->
            <tr>
                <td>28/7/2023</td>
                <td>BANADE</td>
                <td>--</td>
                <td>SAN MIGUEL</td>
            </tr>   
            <tr>
                <td>28/8/2023</td>
                <td>CENTRO GALICIA</td>
                <td>--</td>
                <td>VICTORIA</td>
            </tr>
            <tr>
                <td>28/8/2023</td>
                <td>CLUB 3 DE FEBRERO</td>
                <td>--</td>
                <td>SPORTIVO VILLA BALLESTER</td>
            </tr>
            <tr>
                <td>28/8/2023</td>
                <td>NAUTICO HACOAJ</td>
                <td>--</td>
                <td>COOP DE TORTUGUITAS</td>
            </tr>
            <tr>
                <td>--</td>
                <td>BANCO NACION</td>
                <td>--</td>
                <td>Libre</td>
            </tr>
            <!--FECHA 9-->
            <tr>
                <td>4/9/2023</td>
                <td>COOP DE TORTUGUITAS</td>
                <td>--</td>
                <td>CLUB 3 DE FEBRERO</td>
            </tr>   
            <tr>
                <td>5/9/2023</td>
                <td>SPORTIVO VILLA BALLESTER</td>
                <td>--</td>
                <td>CENTRO GALICIA</td>
            </tr>
            <tr>
                <td>5/9/2023</td>
                <td>VICTORIA</td>
                <td>--</td>
                <td>BANADE</td>
            </tr>
            <tr>
                <td>5/9/2023</td>
                <td>SAN MIGUEL</td>
                <td>--</td>
                <td>BANCO NACION</td>
            </tr>
            <tr>
                <td>--</td>
                <td>NAUTICO HACOAJ</td>
                <td>--</td>
                <td>Libre</td>
            </tr>
            <!--FECHA 10-->
            <tr>
                <td>11/9/2023</td>
                <td>NAUTICO HACOAJ</td>
                <td>--</td>
                <td>CLUB 3 DE FEBRERO</td>
            </tr>
            <tr>
                <td>12/9/2023</td>
                <td>VICTORIA</td>
                <td>--</td>
                <td>BANCO NACION</td>
            </tr>   
            <tr>
                <td>12/9/2023</td>
                <td>SPORTIVO VILLA BALLESTER</td>
                <td>--</td>
                <td>BANADE</td>
            </tr>
            <tr>
                <td>12/9/2023</td>
                <td>COOP DE TORTUGUITAS</td>
                <td>--</td>
                <td>CENTRO GALICIA</td>
            </tr>
            <tr>
                <td>--</td>
                <td>SAN MIGUEL</td>
                <td>--</td>
                <td>Libre</td>
            </tr>
            <!--FECHA 11-->
            <tr>
                <td>18/9/2023</td>
                <td>CENTRO GALICIA</td>
                <td>--</td>
                <td>NAUTICO HACOAJ</td>
            </tr>
            <tr>
                <td>18/9/2023</td>
                <td>BANADE</td>
                <td>--</td>
                <td>COOP DE TORTUGUITAS</td>
            </tr>   
            <tr>
                <td>18/9/2023</td>
                <td>BANCO NACION</td>
                <td>--</td>
                <td>SPORTIVO VILLA BALLESTER</td>
            </tr>
            <tr>
                <td>19/9/2023</td>
                <td>SAN MIGUEL</td>
                <td>--</td>
                <td>VICTORIA</td>
            </tr>
            <tr>
                <td>--</td>
                <td>CLUB 3 DE FEBRERO</td>
                <td>--</td>
                <td>Libre</td>
            </tr>
            <!--FECHA 11-->
            <tr>
                <td>18/9/2023</td>
                <td>CENTRO GALICIA</td>
                <td>--</td>
                <td>NAUTICO HACOAJ</td>
            </tr>
            <tr>
                <td>18/9/2023</td>
                <td>BANADE</td>
                <td>--</td>
                <td>COOP DE TORTUGUITAS</td>
            </tr>   
            <tr>
                <td>18/9/2023</td>
                <td>BANCO NACION</td>
                <td>--</td>
                <td>SPORTIVO VILLA BALLESTER</td>
            </tr>
            <tr>
                <td>19/9/2023</td>
                <td>SAN MIGUEL</td>
                <td>--</td>
                <td>VICTORIA</td>
            </tr>
            <tr>
                <td>--</td>
                <td>CLUB 3 DE FEBRERO</td>
                <td>--</td>
                <td>Libre</td>
            </tr>
            <!--FECHA 12-->
            <tr>
                <td>25/9/2023</td>
                <td>COOP DE TORTUGUITAS</td>
                <td>--</td>
                <td>BANCO NACION</td>
            </tr>   
            <tr>
                <td>25/9/2023</td>
                <td>NAUTICO HACOAJ</td>
                <td>--</td>
                <td>BANADE</td>
            </tr>
            <tr>
                <td>25/9/2023</td>
                <td>CLUB 3 DE FEBRERO</td>
                <td>--</td>
                <td>CENTRO GALICIA</td>
            </tr>
            <tr>
                <td>26/9/2023</td>
                <td>SPORTIVO VILLA BALLESTER</td>
                <td>--</td>
                <td>SAN MIGUEL</td>
            </tr>
            <tr>
                <td>--</td>
                <td>VICTORIA</td>
                <td>--</td>
                <td>Libre</td>
            </tr>
            <!--FECHA 13-->
            <tr>
                <td>2/10/2023</td>
                <td>BANADE</td>
                <td>--</td>
                <td>CLUB 3 DE FEBRERO</td>
            </tr>   
            <tr>
                <td>2/10/2023</td>
                <td>BANCO NACION</td>
                <td>--</td>
                <td>NAUTICO HACOAJ</td>
            </tr>
            <tr>
                <td>3/10/2023</td>
                <td>SAN MIGUEL</td>
                <td>--</td>
                <td>COOP DE TORTUGUITAS</td>
            </tr>
            <tr>
                <td>3/10/2023</td>
                <td>VICTORIA</td>
                <td>--</td>
                <td>SPORTIVO VILLA BALLESTER</td>
            </tr>
            <tr>
                <td>--</td>
                <td>CENTRO GALICIA</td>
                <td>--</td>
                <td>Libre</td>
            </tr>
            <!--FECHA 14-->
            <tr>
                <td>9/10/2023</td>
                <td>COOP DE TORTUGUITAS</td>
                <td>--</td>
                <td>VICTORIA</td>
            </tr>   
            <tr>
                <td>9/10/2023</td>
                <td>NAUTICO HACOAJ</td>
                <td>--</td>
                <td>SAN MIGUEL</td>
            </tr>
            <tr>
                <td>9/10/2023</td>
                <td>CLUB 3 DE FEBRERO</td>
                <td>--</td>
                <td>BANCO NACION</td>
            </tr>
            <tr>
                <td>9/10/2023</td>
                <td>CENTRO GALICIA</td>
                <td>--</td>
                <td>BANADE</td>
            </tr>
            <tr>
                <td>--</td>
                <td>SPORTIVO VILLA BALLESTER</td>
                <td>--</td>
                <td>Libre</td>
            </tr>
            <!--FECHA 15-->
            <tr>
                <td>24/10/2023</td>
                <td>BANCO NACION</td>
                <td>--</td>
                <td>CENTRO GALICIA</td>
            </tr>   
            <tr>
                <td>24/10/2023</td>
                <td>SAN MIGUEL</td>
                <td>--</td>
                <td>CLUB 3 DE FEBRERO</td>
            </tr>
            <tr>
                <td>24/10/2023</td>
                <td>VICTORIA</td>
                <td>--</td>
                <td>NAUTICO HACOAJ</td>
            </tr>
            <tr>
                <td>24/10/2023</td>
                <td>SPORTIVO VILLA BALLESTER</td>
                <td>--</td>
                <td>COOP DE TORTUGUITAS</td>
            </tr>
            <tr>
                <td>--</td>
                <td>BANADE</td>
                <td>--</td>
                <td>Libre</td>
            </tr>
            <!--FECHA 16-->
            <tr>
                <td>30/10/2023</td>
                <td>NAUTICO HACOAJ</td>
                <td>--</td>
                <td>SPORTIVO VILLA BALLESTER</td>
            </tr>   
            <tr>
                <td>30/10/2023</td>
                <td>CLUB 3 DE FEBRERO</td>
                <td>--</td>
                <td>VICTORIA</td>
            </tr>
            <tr>
                <td>30/10/2023</td>
                <td>CENTRO GALICIA</td>
                <td>--</td>
                <td>SAN MIGUEL</td>
            </tr>
            <tr>
                <td>30/10/2023</td>
                <td>BANADE</td>
                <td>--</td>
                <td>BANCO NACION</td>
            </tr>
            <tr>
                <td>--</td>
                <td>COOP DE TORTUGUITAS</td>
                <td>--</td>
                <td>Libre</td>
            </tr>
            <!--FECHA 17-->
            <tr>
                <td>6/11/2023</td>
                <td>COOP DE TORTUGUITAS</td>
                <td>--</td>
                <td>NAUTICO HACOAJ</td>
            </tr>
            <tr>
                <td>7/11/2023</td>
                <td>SAN MIGUEL</td>
                <td>--</td>
                <td>BANADE</td>
            </tr>   
            <tr>
                <td>7/11/2023</td>
                <td>VICTORIA</td>
                <td>--</td>
                <td>CENTRO GALICIA</td>
            </tr>
            <tr>
                <td>7/11/2023</td>
                <td>SPORTIVO VILLA BALLESTER</td>
                <td>--</td>
                <td>CLUB 3 DE FEBRERO</td>
            </tr>
            <tr>
                <td>--</td>
                <td>BANCO NACION</td>
                <td>--</td>
                <td>Libre</td>
            </tr>
            <!--FECHA 18-->
            <tr>
                <td>13/11/2023</td>
                <td>CLUB 3 DE FEBRERO</td>
                <td>--</td>
                <td>COOP DE TORTUGUITAS</td>
            </tr>
            <tr>
                <td>13/11/2023</td>
                <td>CENTRO GALICIA</td>
                <td>--</td>
                <td>SPORTIVO VILLA BALLESTER</td>
            </tr>   
            <tr>
                <td>13/11/2023</td>
                <td>BANADE</td>
                <td>--</td>
                <td>VICTORIA</td>
            </tr>
            <tr>
                <td>13/11/2023</td>
                <td>BANCO NACION</td>
                <td>--</td>
                <td>SAN MIGUEL</td>
            </tr>
            <tr>
                <td>--</td>
                <td>NAUTICO HACOAJ</td>
                <td>--</td>
                <td>Libre</td>
            </tr>
        </tbody>
    </table>
    `;
    // Reemplazar la estructura HTML actual por la nueva estructura
    posicionesPrincipal.innerHTML = TablaPosicionesPlayoffHTML;
    
    fixturePlayoff.innerHTML = fixturePlayoffHTML;
    datosMostrados = true;
}
// Inicializar DataTable con las nuevas configuraciones
    $('#fixture-table-basquet').DataTable({
        info: false,
        paging: true,
        "lengthChange": false,
        "pagingType": "numbers",
        "searching": false,
        "pageLength": 5,
        "aaSorting": false
    });
    $('#fixture-table-basquet').DataTable().draw();
    });
}

mostrarPlayOffOriginal();
