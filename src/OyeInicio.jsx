import React, { useEffect } from "react";
import { OyeHeader } from "./OyeHeader";
import carousel_1 from "./imagenes/carousel-1.jpg";
import carousel_2 from "./imagenes/carousel-2.jpg";
import carousel_3 from "./imagenes/carousel-3.jpg";
import { OyeFooter } from "./OyeFooter";
import { NavLink } from "react-router-dom";
import { OyeContext } from "./OyeContext";
import { OyeTablaTop3 } from "./OyeTablaTop3";

function OyeInicio() {
	const { cargarJson } = React.useContext(OyeContext);

	useEffect(() => {
		cargarJson();
	}, []);

	return (
		<React.Fragment>
			<OyeHeader />
			<main>
				<div className="mt-3 p-3 col-sm-9 mx-auto text-white ">
					<div className="row shadow" id="box-inicio">
						<div className="col-12 col-md-6 mx-auto pt-4 p-4">
							<h2>Canciones Gratis para la comunidad</h2>
							<p>
								Con este sitio podrás escuchar audios de manera
								libre...
							</p>
							<NavLink to="/OyeCanciones">
								<button
									type="button"
									className="btn btn-warning"
								>
									Ver Canciones
								</button>
							</NavLink>
						</div>
						<div className="col-12 col-md-6 mx-auto p-4">
							<div className="d-flex flex-wrap justify-content-center">
								<div
									id="carouselExampleIndicators"
									className="carousel slide"
									data-bs-ride="carousel"
								>
									<div className="carousel-indicators">
										<button
											type="button"
											data-bs-target="#carouselExampleIndicators"
											data-bs-slide-to="0"
											className="active"
											aria-current="true"
											aria-label="Slide 1"
										></button>
										<button
											type="button"
											data-bs-target="#carouselExampleIndicators"
											data-bs-slide-to="1"
											aria-label="Slide 2"
										></button>
										<button
											type="button"
											data-bs-target="#carouselExampleIndicators"
											data-bs-slide-to="2"
											aria-label="Slide 3"
										></button>
									</div>
									<div className="carousel-inner">
										<div className="carousel-item active">
											<img
												src={carousel_1}
												className="d-block w-100"
												alt="carousel1"
											></img>
										</div>
										<div className="carousel-item">
											<img
												src={carousel_2}
												className="d-block w-100"
												alt="carousel2"
											></img>
										</div>
										<div className="carousel-item">
											<img
												src={carousel_3}
												className="d-block w-100"
												alt="carusel3"
											></img>
										</div>
									</div>
									<button
										className="carousel-control-prev"
										type="button"
										data-bs-target="#carouselExampleIndicators"
										data-bs-slide="prev"
									>
										<span
											className="carousel-control-prev-icon"
											aria-hidden="true"
										></span>
										<span className="visually-hidden">
											Previous
										</span>
									</button>
									<button
										className="carousel-control-next"
										type="button"
										data-bs-target="#carouselExampleIndicators"
										data-bs-slide="next"
									>
										<span
											className="carousel-control-next-icon"
											aria-hidden="true"
										></span>
										<span className="visually-hidden">
											Next
										</span>
									</button>
								</div>
							</div>
						</div>
					</div>
					<hr></hr>
					<div className="row mb-3">
						<OyeTablaTop3 />
					</div>
				</div>
			</main>
			<OyeFooter />
		</React.Fragment>
	);
}

export { OyeInicio };
