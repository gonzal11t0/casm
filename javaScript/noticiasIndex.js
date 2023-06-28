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


// Agregar una función para manejar la solicitud DELETE de una noticia por su ID
async function eliminarNoticia(id) {
    try {
    const response = await fetch(`https://api-noticias-express-mongodb-production.up.railway.app/news/delete/649c9e79a30ea3b5b9ea28b5`,{
    });
    console.log(id)
    if (response.ok) {
    console.log(`Noticia con ID ${id} eliminada exitosamente.`);
    // Realizar alguna acción adicional si es necesario
    } else {
    console.error(`Error al eliminar la noticia con ID ${id}.`);
    }
    } catch (error) {
    console.error("Error al realizar la solicitud DELETE:", error);
    }
    }
    
    // Ejemplo de cómo llamar a la función eliminarNoticia con un ID específico
    const noticiaId ="649c9e79a30ea3b5b9ea28b5";
    eliminarNoticia(noticiaId);