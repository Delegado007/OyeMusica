import React from "react";
import { OyeHeader } from "./OyeHeader";
import { OyeFooter } from "./OyeFooter";

let URL = window.location.href;
let largoURL = URL.length;
let cortarURL = largoURL - 12;
let URLFinal = URL.substr(0, cortarURL);

//validacion con javascripts
const localStorageUsuarios = localStorage.getItem("Usuarios_v1");
let localUsuarios;
if (!localStorageUsuarios) {
	localStorage.setItem("Usuarios_v1", JSON.stringify([]));
	localUsuarios = [];
} else {
	try {
		localUsuarios = JSON.parse(localStorageUsuarios);
	} catch (error) {
		console.log(error);
	}
}

function limpiarErrores() {
	var errores = document.getElementsByClassName("error");
	for (var i = 0; i < errores.length; i++) {
		errores[i].innerHTML = "";
	}
}
function validar() {
	const formulario = document.getElementById("formulario");

	limpiarErrores();

	var re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (!re.test(formulario.email.value)) {
		document.getElementById("errorEmail").innerText = "Campo inválido";
		formulario.email.className = "form-control is-invalid";
		formulario.email.focus();
		return false;
	} else {
		formulario.email.className = "form-control is-valid";
	}
	if (formulario.contrasena.value.trim().length < 8) {
		document.getElementById("errorContrasena").innerText =
			"Campo inválido (Mínimo 8 caracteres)";
		formulario.contrasena.className = "form-control is-invalid";
		formulario.contrasena.focus();
		return false;
	} else {
		formulario.contrasena.className = "form-control is-valid";
	}
	if (formulario.contrasena.value != formulario.confirmacion.value) {
		document.getElementById("errorConfirmacion").innerText =
			"Confirmación no coincide";
		formulario.confirmacion.className = "form-control is-invalid";
		formulario.confirmacion.focus();
		return false;
	} else {
		formulario.confirmacion.className = "form-control is-valid";
	}
	if (formulario.generoMusica.value == "") {
		document.getElementById("errorGenero").innerText =
			"Selecciona un genero Musical";
		return false;
	}
	if (formulario.edad.value == "") {
		document.getElementById("errorEdad").innerText = "Selecciona tu edad";
		return false;
	}
	if (!formulario.terminos.checked) {
		document.getElementById("errorTerminos").innerText =
			"Debe aceptar los términos y condiciones";
		formulario.terminos.focus();
		return false;
	}
	limpiarErrores();
	cargarLocalStorage(formulario);
	document.location = `${URLFinal}/OyeLogin`;
}
//carga de usuario en localstorage
const cargarLocalStorage = (formulario) => {
	let sing_up = [
		formulario.email.value,
		formulario.contrasena.value,
		formulario.generoMusica.value,
		formulario.edad.value,
	];
	localUsuarios.push(sing_up);
	localStorage.setItem("Usuarios_v1", JSON.stringify(localUsuarios));
	console.log(sing_up);
};

//rederizado de formulario con React
function OyeRegistro() {
	const noSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<React.Fragment>
			<OyeHeader />
			<main>
				<div className="py-5">
					<div className="col-sm-9 col-lg-5 mx-auto px-2">
						<form
							className="text-white"
							id="formulario"
							action=""
							onSubmit={noSubmit}
						>
							<div className="mb-3">
								<label className="form-label">
									Correo Electronico *
								</label>
								<input
									type="text"
									placeholder="abc@ejemplo.com"
									className="form-control"
									id="email"
									name="email"
								></input>
								<span id="errorEmail" className="error"></span>
							</div>
							<div className="mb-3">
								<label className="form-label">
									Contraseña *
								</label>
								<input
									type="password"
									className="form-control"
									name="contrasena"
									id="contrasena"
								></input>
								<span
									id="errorContrasena"
									className="error"
								></span>
							</div>
							<div className="mb-3">
								<label className="form-label">
									Verificar Contraseña *
								</label>
								<input
									type="password"
									className=" form-control"
									name="confirmacion"
									id="confirmacion"
								></input>
								<span
									id="errorConfirmacion"
									className="error"
								></span>
							</div>
							<div className="mb-3">
								<label className="form-label">
									Género musical favorito *
								</label>
								<select
									className="form-select"
									aria-label="Default select example"
									name="generoMusica"
								>
									<option defaultValue value="">
										Seleccione...
									</option>
									<option value="Rock">Rock</option>
									<option value="Balada">Balada</option>
									<option value="Salsa">Salsa</option>
									<option value="Otro">Otro</option>
								</select>
								<span id="errorGenero" className="error"></span>
							</div>
							<div className="mb-3">
								<label className="form-label">Edad *</label>
								<div className="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="edad"
										id="mayor_20"
										value="mayor a 20"
									></input>
									<label className="form-check-label">
										Mayor a 20
									</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="edad"
										id="20_a_40"
										value="20 a 40"
									></input>
									<label className="form-check-label">
										Entre 20 y 40
									</label>
								</div>
								<div className="form-check">
									<input
										className="form-check-input"
										type="radio"
										name="edad"
										id="40_o_mas"
										value="40 o mas"
									></input>
									<label className="form-check-label">
										Mayor a 40
									</label>
								</div>
							</div>
							<span id="errorEdad" className="error"></span>
							<div className="mb-3 form-check">
								<input
									type="checkbox"
									className="form-check-input"
									id="exampleCheck1"
									name="terminos"
								></input>
								<label className="form-check-label">
									Acepto los terminos de uso *
								</label>
							</div>
							<span id="errorTerminos" className="error"></span>
							<p id="campos_obligatorios">
								* Campos obligatorios
							</p>
							<div className="row mx-auto" id="div-boton">
								<button
									type="submit"
									className="btn btn-success mx-auto"
									id="botonEnviar"
									onClick={() => {
										validar();
									}}
								>
									Enviar
								</button>
							</div>
						</form>
					</div>
				</div>
			</main>
			<OyeFooter />
		</React.Fragment>
	);
}

export { OyeRegistro };
