import React from "react";

function OyeBuscador({ buscar, setBuscar }) {
	const actualizar = (e) => {
		setBuscar(e.target.value);
	};
	const submit = (e) => {
		e.preventDefault();
	};
	return (
		<div className="row">
			<div className="col mb-3">
				<form onSubmit={submit}>
					<h2 className="text-white mx-2">Canciones</h2>
					<div className="form-goup">
						<div className="m-2">
							<input
								type="text"
								className="form-control"
								id="name"
								placeholder="Buscar..."
								value={buscar}
								onChange={actualizar}
							/>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export { OyeBuscador };
