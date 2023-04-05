/*creo las variables y la relaciono con su id del html*/
const form = document.getElementById('form');
const Nombre = document.getElementById('nombre');
const Apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const localidad = document.getElementById('localidad');
/*verifico que los inputs no esten vacios*/
form.addEventListener('submit', e => {
	e.preventDefault();
	checkInputs();
});
/*creo la funcion para validad que los inputs no esten vacions*/
function checkInputs() {
	const NombreValue = Nombre.value.trim();
    const ApellidoValue = Apellido.value.trim();
	const emailValue = email.value.trim();
    const localidadValue = localidad.value.trim();
/*verifico que el input no sea null*/	
	if(NombreValue === '') {
		setErrorFor(Nombre, 'Ingrese su nombre.');
	} else {
		setSuccessFor(Nombre);
	}
    if(ApellidoValue === '') {
		setErrorFor(Apellido, 'Ingrese su apellido.');
	} else {
		setSuccessFor(Apellido);
	}
	if(emailValue === '') {
		setErrorFor(email, 'Ingrese su email.');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido.');
	} else {
		setSuccessFor(email);
	}
    if(localidadValue === '') {
		setErrorFor(localidad, 'Ingrese su localidad.');
	} else {
		setSuccessFor(localidad);
	}
}
/*muestro el mensaje de error si esta null */
function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
/*verifico que el email tenga formato de email*/
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
