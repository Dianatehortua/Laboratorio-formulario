const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const clave = document.getElementById("clave");
const confirmacion = document.getElementById("confirmacion");
const form = document.getElementById("formulario");
const listInputs = document.querySelectorAll(".campo");

const expresiones = {
	nombre: /^[a-zA-Z]{1,40}$/,
	clave: /^.{8,15}$/, 
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
	nombre: false,
	clave: false,
	email: false,
}
const validarcampos = (e) =>{
	switch (e.target.name){
		case "nombre":
			if(expresiones.nombre.test(e.target.value)){
				document.getElementById('grupo__nombre').classList.remove('formulario__input-incorrecto');
				document.getElementById('grupo__nombre').classList.add('formulario__input-correcto');
				document.querySelector('#grupo__nombre i').classList.add('success-icon');
				document.querySelector('#grupo__nombre i').classList.remove('error-icon');
			} else{
				document.getElementById('grupo__nombre').classList.add('formulario__input-incorrecto');
				document.getElementById('grupo__nombre').classList.remove('formulario__input-correcto');
				document.querySelector('#grupo__nombre i').classList.remove('success-icon');
				document.querySelector('#grupo__nombre i').classList.add('error-icon');
			}

		break;
		case "email":
				if(expresiones.email.test(e.target.value)){
					document.getElementById('grupo__email').classList.remove('formulario__input-incorrecto');
					document.getElementById('grupo__email').classList.add('formulario__input-correcto');
					document.querySelector('#grupo__email i').classList.add('success-icon');
					document.querySelector('#grupo__email i').classList.remove('error-icon');
				} else{
					document.getElementById('grupo__email').classList.add('formulario__input-incorrecto');
					document.getElementById('grupo__email').classList.remove('formulario__input-correcto');
					document.querySelector('#grupo__email i').classList.remove('success-icon');
					document.querySelector('#grupo__email i').classList.add('error-icon');
				}	
		break;
		case "clave":
			if(expresiones.clave.test(e.target.value)){
					document.getElementById('grupo__clave').classList.remove('formulario__input-incorrecto');
					document.getElementById('grupo__clave').classList.add('formulario__input-correcto');
					document.querySelector('#grupo__clave i').classList.add('success-icon');
					document.querySelector('#grupo__clave i').classList.remove('error-icon');
				} else{
					document.getElementById('grupo__clave').classList.add('formulario__input-incorrecto');
					document.getElementById('grupo__clave').classList.remove('formulario__input-correcto');
					document.querySelector('#grupo__clave i').classList.remove('success-icon');
					document.querySelector('#grupo__clave i').classList.add('error-icon');
				}
		break;
		case "confirmacion":
			if(clave.value !== confirmacion.value){
					document.getElementById('grupo__confirmacion').classList.add('formulario__input-incorrecto');
					document.getElementById('grupo__confirmacion').classList.remove('formulario__input-correcto');
					document.querySelector('#grupo__confirmacion i').classList.remove('success-icon');
					document.querySelector('#grupo__confirmacion i').classList.add('error-icon');
				} else{
					document.getElementById('grupo__confirmacion').classList.remove('formulario__input-incorrecto');
					document.getElementById('grupo__confirmacion').classList.add('formulario__input-correcto');
					document.querySelector('#grupo__confirmacion i').classList.add('success-icon');
					document.querySelector('#grupo__confirmacion i').classList.remove('error-icon');
				}
		break;
	}
}
listInputs.forEach((input) => {
	input.addEventListener('keyup', validarcampos);
	input.addEventListener('blur', validarcampos);

});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let condicion = validacionForm();
  if (condicion) {
    enviarFormulario();
  }
});

function validacionForm() {
  form.lastElementChild.innerHTML = "";
  let condicion = true;
  listInputs.forEach((element) => {
    element.lastElementChild.innerHTML = "";
  });

  if (nombre.value.length < 1 || nombre.value.trim() == "") {
    mostrarMensajeError("nombre", "Campo obligatorio*");
    condicion = false;
  }
  if (email.value.length < 1 || email.value.trim() == "") {
    mostrarMensajeError("email", "Campo obligatorio*");
    condicion = false;
  }
  if (clave.value.length < 1 || clave.value.trim() == "") {
    mostrarMensajeError("clave", "La contraseña debe tener al menos 8 caracteres*");
    condicion = false;
  }
  if (confirmacion.value != clave.value) {
    mostrarMensajeError("confirmacion", "Las contraseñas deben coincidir*");
    condicion = false;
  }
  return condicion;
}

function mostrarMensajeError(claseInput, mensaje) {
  let elemento = document.querySelector(`.${claseInput}`);
  elemento.lastElementChild.innerHTML = mensaje;
}

function enviarFormulario() {
  form.reset();
  form.lastElementChild.innerHTML = "Enviado";
  window.alert('La inscripción se ha realizado correctamente')
}
