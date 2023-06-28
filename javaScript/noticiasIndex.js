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