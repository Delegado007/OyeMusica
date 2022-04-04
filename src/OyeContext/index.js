import React, { useState } from "react";

const OyeContext = React.createContext();

function OyeProvider(props) {
	//conectando a datos.json
	const [canciones, setCanciones] = useState([
		{
			nombre: "1",
			ruta: "",
			reproducciones: "",
			icono: "",
		},
		{
			nombre: "2",
			ruta: "",
			reproducciones: "",
			icono: "",
		},
		{
			nombre: "",
			ruta: "",
			reproducciones: "",
			icono: "",
		},
	]);

	const url = "http://localhost:5000/canciones";
	const url2 =
		"https://raw.githubusercontent.com/Delegado007/json_oye/main/datos.json";

	const cargarJson = function () {
		fetch(url2)
			.then((Response) => Response.json())
			.then((datos) => {
				const array = datos.canciones;
				setCanciones(array);
			});
	};

	//cargando usuario logueado
	const localStorageLogueado = localStorage.getItem("Logueado_v1");
	let Logueado = "";
	if (!localStorageLogueado) {
		localStorage.setItem("Logueado_v1", JSON.stringify(Logueado));
	} else {
		try {
			Logueado = JSON.parse(localStorageLogueado);
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<OyeContext.Provider
			value={{
				Logueado,
				cargarJson,
				canciones,
			}}
		>
			{props.children}
		</OyeContext.Provider>
	);
}

export { OyeContext, OyeProvider };
