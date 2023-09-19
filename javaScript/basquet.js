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
<div id="principal-basquet-posiciones" >
<table id="tabla-posiciones-basquet"class="table table-active table-responsive table-responsive-lg table-responsive-md table-responsive-sm table-sm">
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
    
<div id="principal-basquet-fixure">
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
                    <td>SPORTIVO VILLA BALLESTER <img id="img-basquet-u23m" src="./img/iconos-clubes/SPORTIVO VILLA BALLESTER.jpg"></td></td>
                    <td>10</td>
                    <td>7</td>
                    <td>3</td>
                    <td>17</td>
                </tr>
                <tr data-row-index="2">
                    <td>BANCO NACION <img id="img-basquet-u23m" src="./img/iconos-clubes/banco nacion.jpg"></td>
                    <td>10</td>
                    <td>7</td>
                    <td>3</td>
                    <td>17</td>
                </tr>
                <tr data-row-index="3">
                    <td>BANADE <img id="img-basquet-u23m" src="./img/iconos-clubes/banade.jpg"></td>
                    <td>10</td>
                    <td>7</td>
                    <td>3</td>
                    <td>17</td>
                </tr>
                <tr data-row-index="4">
                    <td>NAUTICO HACOAJ <img id="img-basquet-u23m" src="./img/iconos-clubes/nautico ha.jpg"></td>
                    <td>10</td>
                    <td>7</td>
                    <td>3</td>
                    <td>17</td>
                </tr>   
                <tr data-row-index="5">
                    <td>CENTRO GALICIA <img id="img-basquet-u23m" src="./img/iconos-clubes/centro galicia.jpg"></td>
                    <td>10</td>
                    <td>3</td>
                    <td>7</td>
                    <td>13</td>
                </tr>
                <tr data-row-index="6">
                    <td>San Miguel <img id="img-basquet-u23m" src="./img/iconos-clubes/san miguel.jpg"></td>
                    <td>10</td>
                    <td>3</td>
                    <td>7</td>
                    <td>13</td>
                </tr>
                <tr data-row-index="7">
                    <td>COOP DE TORTUGUITAS <img id="img-basquet-u23m" src="./img/iconos-clubes/coop tortu.jpg"></td>
                    <td>10</td>
                    <td>2</td>
                    <td>8</td>
                    <td>12</td>
                </tr>
                <tr data-row-index="8">
                    <td>CLUB 3 DE FEBRERO <img id="img-basquet-u23m" src="./img/iconos-clubes/club 3febrero.jpg"></td>
                    <td>9</td>
                    <td>3</td>
                    <td>6</td>
                    <td>12</td>
                </tr>
                <tr data-row-index="9">
                    <td>VICTORIA <img id="img-basquet-u23m" src="./img/iconos-clubes/victoria.jpg"></td>
                    <td>9</td>
                    <td>2</td>
                    <td>7</td>
                    <td>11</td>
                </tr>
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
                <td>68-63</td>
                <td>VICTORIA</td>
            </tr>
            <tr>
                <td>26/6/2023</td>
                <td>BANADE</td>
                <td>70-58</td>
                <td>SPORTIVO VILLA BALLESTER</td>
            </tr>
            <tr>
                <td>26/6/2023</td>
                <td>CENTRO GALICIA</td>
                <td>81-46</td>
                <td>COOP DE TORTUGUITAS</td>
            </tr>
            <tr>
                <td>26/6/2023</td>
                <td>CLUB 3 DE FEBRERO</td>
                <td>64-69</td>
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
                <td>87-53</td>
                <td>CENTRO GALICIA</td>
            </tr>
            <tr>
                <td>3/7/2023</td>
                <td>COOP DE TORTUGUITAS</td>
                <td>70-77</td>
                <td>BANADE</td>
            </tr>
            <tr>
                <td>4/7/2023</td>
                <td>SPORTIVO VILLA BALLESTER</td>
                <td>58-74</td>
                <td>BANCO NACION</td>
            </tr>
            <tr>
                <td>4/7/2023</td>
                <td>VICTORIA</td>
                <td>57-72</td>
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
                <td>102-43</td>
                <td>COOP DE TORTUGUITAS</td>
            </tr>
            <tr>
                <td>10/7/2023</td>
                <td>BANADE</td>
                <td>67-45</td>
                <td>NAUTICO HACOAJ</td>
            </tr>
            <tr>
                <td>10/7/2023</td>
                <td>CENTRO GALICIA</td>
                <td>71-75</td>
                <td>CLUB 3 DE FEBRERO</td>
            </tr>
            <tr>
                <td>11/7/2023</td>
                <td>SAN MIGUEL</td>
                <td>72-66</td>
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
                <td>58-75</td>
                <td>BANADE</td>
            </tr>
            <tr>
                <td>17/7/2023</td>
                <td>NAUTICO HACOAJ</td>
                <td>49-63</td>
                <td>BANCO NACION</td>
            </tr>
            <tr>
                <td>17/7/2023</td>
                <td>COOP DE TORTUGUITAS</td>
                <td>60-64</td>
                <td>SAN MIGUEL</td>
            </tr>
            <tr>
                <td>18/7/2023</td>
                <td>SPORTIVO VILLA BALLESTER</td>
                <td>83-71</td>
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
                <td>69-67</td>
                <td>CENTRO GALICIA</td>
            </tr>   
            <tr>
                <td>1/8/2023</td>
                <td>VICTORIA</td>
                <td>65-66</td>
                <td>COOP DE TORTUGUITAS</td>
            </tr>
            <tr>
                <td>1/8/2023</td>
                <td>SAN MIGUEL</td>
                <td>47-56</td>
                <td>NAUTICO HACOAJ</td>
            </tr>
            <tr>
                <td>1/8/2023</td>
                <td>BANCO NACION</td>
                <td>74-77</td>
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
                <td>68-85</td>
                <td>BANCO NACION</td>
            </tr>   
            <tr>
                <td>7/8/2023</td>
                <td>CLUB 3 DE FEBRERO</td>
                <td>67-63</td>
                <td>SAN MIGUEL</td>
            </tr>
            <tr>
                <td>7/8/2023</td>
                <td>NAUTICO HACOAJ</td>
                <td>64-60</td>
                <td>VICTORIA</td>
            </tr>
            <tr>
                <td>7/8/2023</td>
                <td>COOP DE TORTUGUITAS</td>
                <td>53-74</td>
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
                <td>94-71</td>
                <td>BANADE</td>
            </tr>
            <tr>
                <td>15/8/2023</td>
                <td>SPORTIVO VILLA BALLESTER</td>
                <td>53-36</td>
                <td>NAUTICO HACOAJ</td>
            </tr>   
            <tr>
                <td>15/8/2023</td>
                <td>VICTORIA</td>
                <td>67-65</td>
                <td>CLUB 3 DE FEBRERO</td>
            </tr>
            <tr>
                <td>15/8/2023</td>
                <td>SAN MIGUEL</td>
                <td>78-79</td>
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
                <td>71-76</td>
                <td>SAN MIGUEL</td>
            </tr>   
            <tr>
                <td>28/8/2023</td>
                <td>CENTRO GALICIA</td>
                <td>68-75</td>
                <td>VICTORIA</td>
            </tr>
            <tr>
                <td>28/8/2023</td>
                <td>CLUB 3 DE FEBRERO</td>
                <td>54-60</td>
                <td>SPORTIVO VILLA BALLESTER</td>
            </tr>
            <tr>
                <td>28/8/2023</td>
                <td>NAUTICO HACOAJ</td>
                <td>58-67</td>
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
                <td>68-57</td>
                <td>CLUB 3 DE FEBRERO</td>
            </tr>   
            <tr>
                <td>5/9/2023</td>
                <td>SPORTIVO VILLA BALLESTER</td>
                <td>71-39</td>
                <td>CENTRO GALICIA</td>
            </tr>
            <tr>
                <td>5/9/2023</td>
                <td>VICTORIA</td>
                <td>57-61</td>
                <td>BANADE</td>
            </tr>
            <tr>
                <td>5/9/2023</td>
                <td>SAN MIGUEL</td>
                <td>74-73</td>
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
                <td>70-49</td>
                <td>CLUB 3 DE FEBRERO</td>
            </tr>
            <tr>
                <td>12/9/2023</td>
                <td>VICTORIA</td>
                <td>73-74</td>
                <td>BANCO NACION</td>
            </tr>   
            <tr>
                <td>12/9/2023</td>
                <td>SPORTIVO VILLA BALLESTER</td>
                <td>82-53</td>
                <td>BANADE</td>
            </tr>
            <tr>
                <td>12/9/2023</td>
                <td>COOP DE TORTUGUITAS</td>
                <td>77-82</td>
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
                <td>50-61</td>
                <td>NAUTICO HACOAJ</td>
            </tr>
            <tr>
                <td>18/9/2023</td>
                <td>BANADE</td>
                <td>75-50</td>
                <td>COOP DE TORTUGUITAS</td>
            </tr>   
            <tr>
                <td>18/9/2023</td>
                <td>BANCO NACION</td>
                <td>81-90</td>
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

function irConferencia1(){
    const buttonirConferencia1=document.getElementById("buttonirConferencia1");
    buttonirConferencia1.addEventListener("click", function(){
        buttonirConferencia1.classList.style.display="block";
    });
}
irConferencia1()
mostrarPlayOffOriginal();
