const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    const titleInput = document.getElementById('title');
    const descriptionInput = document.getElementById('description');
    const autorInput = document.getElementById('autor');
    const titleError = document.getElementById('title-error');
    const descriptionError = document.getElementById('description-error');
    const autorError = document.getElementById('autor-error');

    titleError.textContent = '';
    descriptionError.textContent = '';
    autorError.textContent = '';

    if (!validarInput(titleInput.value)) {
        event.preventDefault();
        titleError.textContent = 'El título debe tener la primera letra mayúscula y una longitud mínima de 3 caracteres.';
    }

    if (!validarInput(descriptionInput.value)) {
        event.preventDefault();
        descriptionError.textContent = 'La descripción debe tener la primera letra mayúscula y una longitud mínima de 3 caracteres.';
    }

    if (!validarInput(autorInput.value)) {
        event.preventDefault();
        autorError.textContent = 'El autor debe tener la primera letra mayúscula y una longitud mínima de 3 caracteres.';
    }
});

function validarInput(inputValue) {
    const regex = /^[A-Z].{2,}$/;
    return regex.test(inputValue);
}








/* fUNCION PARA ELIMINAR UNA NOTICIA ESPECIFICA CON UN ID */
/* SI QUEREMOS ELIMINAR TODAS LAS NOTICIAS PONEMOS ESTE LINK:
https://api-noticias-express-mongodb-production.up.railway.app/delete/all
*/

const deleteNewsId = async (id) => {
    try {
    const response = await fetch(`https://api-noticias-express-mongodb-production.up.railway.app/news/${id}`, {
    method:'DELETE'
    });
    
    if (response.ok) {
    console.log(`Noticia con ID ${id} eliminada exitosamente.`);
    // Realizar alguna acción adicional si es necesario
    } else {
    console.error(`Error al eliminar la noticia con ID ${id}.`);
    }
    } catch (error) {
    console.error('Error al realizar la solicitud DELETE:', error);
    }
    };


// Ejemplo de cómo llamar a la función deleteNewsId con un ID específico
const noticiaId = "649dbe8013f9de304664c863";
deleteNewsId(noticiaId);









/* vinculo el link y el contenedor principal */
const url = 'https://api-noticias-express-mongodb-production.up.railway.app/news';
const newsContainer = document.getElementById('newsContainer');




// Crear la sección 2 dinámicamente y le agreggo el id 
const seccion2 = document.createElement("section");
seccion2.id = "seccion-2IndexNoticias";

const h1=document.createElement("h1");
h1.classList.add("titleNoticiasIndex");
h1.textContent = "Visualizacion";

seccion2.appendChild(h1);
const container = document.createElement("div");
container.classList.add("container");


function handleDeleteButtonClick(event) {
  const card = event.target.closest(".card");
  const id = card.getAttribute("data-id");
  deleteNewsId(id);
}




// Función para crear una tarjeta con título y descripción


function createCard(title, description) {
  //creo un div para la card y le asigno un id
  const card = document.createElement("div");
  card.setAttribute("id", "card");

  //creo divs y le asigno clases
  const frontContent = document.createElement("div");
  frontContent.classList.add("front");
  const backContent = document.createElement("div");
  backContent.classList.add("back");

  //le asigno a las variables los valores obtenidos de la peticion fecth
  const titleElement = document.createElement("h1");
  titleElement.textContent = title;

  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = description;

  ///agreggo los valores obtenidos al front y back de la estructura html
  frontContent.appendChild(titleElement);
  backContent.appendChild(descriptionElement);

  card.appendChild(frontContent);
  card.appendChild(backContent);

  return card;
}


// funcion para obtener los datos de la api convertirlos en json y lo agrego al contendero
function fecth () {  
  fetch(url)
  .then((response) => response.json())
  .then((data) => {
    //recorro cada noticia obtenida de la api
    data.forEach((noticia) => {
      // Crear una tarjeta con los datos de la API
      const card = createCard(noticia.title, noticia.description);
      // Agregar la tarjeta al contenedor
      container.appendChild(card);
    });

    // Agregar el contenedor de tarjetas a la sección 2
    seccion2.appendChild(container);
  });
}
fecth ()




/* funcion para actualizar las noticias cada x segundos */
function cadaCiertoTiempoActualizar() {
  setInterval(async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const noticias = await response.json();
        noticias.forEach((noticia) => {
          actualizarTarjeta(noticia.id, noticia.title, noticia.description);
        });
      } else {
          console.error("Error al obtener las noticias desde la API.");
        }
      } catch (error) {
        console.error("Error al realizar la solicitud GET:", error);
      }
  }, 2000);
}
cadaCiertoTiempoActualizar() 




// obtenemos los datos nuevos introducidos en la api y los agregamos a la pagina 

function actualizarTarjeta(id, title, description) {
  const card = document.querySelector(`[data-id="${id}"]`);
  if (card) {
    const cardTitle = card.querySelector(".card-title");
    const cardDescription = card.querySelector(".card-description");
    cardTitle.textContent = title;
    cardDescription.textContent = description;
  }
}
  document.body.appendChild(seccion2);
