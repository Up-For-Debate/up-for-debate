import React, { useState } from "react";
import states from "../../assets/states.json";
import Map from "./Map.js";
import "./explore.css";
import Representatives from "../Representative/Representatives.js";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const Explore = () => {
	const [stateSelected, setStateSelected] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	return (
		<>
			Explore
			<div className="explore-main">
				<div className="explore-reps">
					{isLoading ? (
						<div
							style={{
								height: "100vh",
								width: "40vw",
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}}
						>
							<Loader
								type="CradleLoader"
								// color="#00BFFF"
								height={100}
								width={100}
								// timeout={3000}
							/>
							<Representatives
								setIsLoading={setIsLoading}
								isLoading={isLoading}
							/>
						</div>
					) : (
						<Representatives
							setIsLoading={setIsLoading}
							isLoading={isLoading}
						/>
					)}
				</div>
				<div className="explore-map">
					<Map
						setIsLoading={setIsLoading}
						states={states}
						stateSelected={stateSelected}
						setStateSelected={setStateSelected}
					/>
				</div>
			</div>
		</>
	);
};

export default Explore;
