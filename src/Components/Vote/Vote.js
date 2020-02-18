import React, { useEffect, useState } from "react";
import GoogleMapComponent from "./GoogleMapComponent";
import axios from "axios";
import RegisterToVote from "../RegisterToVote/RegisterToVote";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Moment from "react-moment";
import { connect } from "react-redux";
const { REACT_APP_GOOGLE_MAPS_KEY } = process.env;

//Unhighlight anything in the function if you want google maps to render. Only render it if you need.
const Vote = props => {
	const [elections, setElections] = useState("");
	const [pollingLocation, setPollingLocation] = useState("");
	const [federalElection, setFederalElection] = useState([]);
	const [stateElections, setStateElections] = useState({});
	const [geoCodeAddress, setGeoCodeAddress] = useState("");
	const [pollingFormated, setPollingFormtated] = useState("");
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		axios
			.get(
				`/api/elections?address=${props.streetAddress}, ${props.city}, ${props.usState} ${props.zipcode}`
			)
			.then(res => {
				setElections(res.data);
				setIsLoading(false);
			})
			.catch(err => console.log(err));
	}, []);

	useEffect(() => {
		if (elections) {
			setStateElections(elections.state[0]);
			setFederalElection(elections.election);
			destructurePollingLocation();
			setPollingLocation(elections.pollingLocations);
			// console.log(elections.pollingLocations);
		}
	}, [elections]);
	useEffect(() => {
		GeoCodeAddress();
	}, [pollingLocation]);

	const destructurePollingLocation = () => {
		if (elections) {
			const pollAddress = elections.pollingLocations[0].address;
			setPollingLocation(pollAddress);
		}
	};
	const GeoCodeAddress = () => {
		if (pollingLocation) {
			console.log(pollingLocation);
			axios
				.get(
					`https://maps.googleapis.com/maps/api/geocode/json?address=${pollingLocation[0].address.line1} ${pollingLocation[0].address.city} ${pollingLocation[0].address.state} ${pollingLocation[0].address.zip}&key=${REACT_APP_GOOGLE_MAPS_KEY}	
`
				)
				.then(res => {
					setPollingFormtated(res.data.results[0].formatted_address);
					setGeoCodeAddress(res.data.results[0].geometry.location);
				});
		}
	};
	console.log(geoCodeAddress);

	return (
		<div>
			{isLoading ? (
				<div
					style={{
						height: "100vh",
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
				</div>
			) : (
				<>
					<RegisterToVote />
					<h2>Upcoming Elections</h2>
					{federalElection ? (
						<div>
							<h2>{federalElection.name}:</h2>{" "}
							<Moment format="MMMM Do YYYY">
								{federalElection.electionDay}
							</Moment>
						</div>
					) : null}
					{stateElections ? (
						stateElections.electionAdministrationBody ? (
							<div>
								<h2>Upcoming Elections</h2>
								<h2>{stateElections.electionAdministrationBody.name}</h2>
								<p>
									More Info:{" "}
									<a
										target="_blank"
										rel="noopener"
										href={
											stateElections.electionAdministrationBody.electionInfoUrl
										}
									>
										{stateElections.electionAdministrationBody.electionInfoUrl}
									</a>
								</p>
								{stateElections.local_jurisdiction ? (
									<div>
										<h2>
											{
												stateElections.local_jurisdiction
													.electionAdministrationBody.name
											}
										</h2>
										<p>
											More Info:{" "}
											<a
												target="_blank"
												rel="noopener"
												href={
													stateElections.local_jurisdiction
														.electionAdministrationBody.electionInfoUrl
												}
											>
												{
													stateElections.local_jurisdiction
														.electionAdministrationBody.electionInfoUrl
												}
											</a>
										</p>
									</div>
								) : null}
							</div>
						) : null
					) : null}
					{geoCodeAddress ? (
						<>
							<h2>Looking For Where to Vote?</h2>
							<GoogleMapComponent
								pollingLocation={pollingLocation[0].address}
								formatedLocation={pollingFormated}
								lat={geoCodeAddress.lat}
								lng={geoCodeAddress.lng}
							/>
						</>
					) : (
						<div
							style={{
								height: "100%",
								display: "flex",
								justifyContent: "center",
								alignItems: "center"
							}}
						>
							<Loader
								type="TailSpin"
								color="#BC051B"
								height={75}
								width={75}
								// timeout={3000}
							/>
						</div>
					)}
				</>
			)}
		</div>
	);
};
const mapStateToProps = reduxState => {
	return reduxState;
};

export default connect(mapStateToProps)(Vote);
