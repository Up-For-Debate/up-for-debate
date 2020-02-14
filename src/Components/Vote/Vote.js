import React, { useEffect, useState } from "react";
import GoogleMapComponent from "./GoogleMapComponent";
import axios from "axios";
import RegisterToVote from "../RegisterToVote/RegisterToVote";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
const { REACT_APP_GOOGLE_MAPS_KEY } = process.env;

//Unhighlight anything in the function if you want google maps to render. Only render it if you need.
const Vote = props => {
	const [elections, setElections] = useState("");
	const [pollingLocation, setPollingLocation] = useState("");
	const [federalElection, setFederalElection] = useState([]);
	const [stateElections, setStateElections] = useState({});
	const [geoCodeAddress, setGeoCodeAddress] = useState("");
	const [pollingFormated, setPollingFormtated] = useState("");
	useEffect(() => {
		axios
			.get(`/api/elections?address=204 Newgate Cir, Alabaster, AL 35007`)
			.then(res => {
				setElections(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	useEffect(() => {
		if (elections) {
			setStateElections(elections.state[0]);
			setFederalElection(elections.election);
			destructurePollingLocation();
			// setPollingLocation(elections.pollingLocations);
		}
	}, [elections]);
	// useEffect(() => {
	// 	GeoCodeAddress();
	// }, [pollingLocation]);

	const destructurePollingLocation = () => {
		if (elections) {
			const pollAddress = elections.pollingLocations[0].address;
			setPollingLocation(pollAddress);
		}
	};
	const GeoCodeAddress = () => {
		if (pollingLocation) {
			axios
				.get(
					`https://maps.googleapis.com/maps/api/geocode/json?address=${pollingLocation.line1} ${pollingLocation.city} ${pollingLocation.state} ${pollingLocation.zip}&key=${REACT_APP_GOOGLE_MAPS_KEY}	
`
				)
				.then(res => {
					setPollingFormtated(res.data.results[0].formatted_address);
					setGeoCodeAddress(res.data.results[0].geometry.location);
				});
		}
	};

	return (
		<div>
			<RegisterToVote />
			<h2>Upcoming Elections</h2>
			{federalElection ? (
				<div>
					<h2>{federalElection.name}:</h2>{" "}
					<h2>{federalElection.electionDay}</h2>
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
								href={stateElections.electionAdministrationBody.electionInfoUrl}
							>
								{stateElections.electionAdministrationBody.electionInfoUrl}
							</a>
						</p>
						{stateElections.local_jurisdiction ? (
							<div>
								<h2>
									{
										stateElections.local_jurisdiction.electionAdministrationBody
											.name
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
			{/* {geoCodeAddress ? (
				<h2>Looking For Where to Vote?</h2>
				<GoogleMapComponent
					formatedLocation={pollingFormated}
					lat={geoCodeAddress.lat}
					lng={geoCodeAddress.lng}
				/>
			) : (
				"loading Google Maps"
			)} */}
		</div>
	);
};
export default Vote;
