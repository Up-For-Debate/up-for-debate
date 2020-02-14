import React, { useEffect, useState } from "react";
import axios from "axios";
import GoogleMapReact from "google-map-react";
const { REACT_APP_GOOGLE_MAPS_KEY } = process.env;

const Vote = props => {
	const [elections, setElections] = useState("");
	const [pollingLocation, setPollingLocation] = useState("");
	const [federalElection, setFederalElection] = useState([]);
	const [stateElections, setStateElections] = useState({});
	useEffect(() => {
		axios
			.get(`/api/elections?address=204 Newgate Cir, Alabaster, AL 35007`)
			.then(res => {
				setElections(res.data);
			})
			.catch(err => console.log(err));
	}, []);

	useEffect(() => {
		// setPollingLocation(elections.pollingLocations);
		setStateElections(elections.state);
		setFederalElection(elections.election);
		destructurePollingLocation();
	}, [elections]);
	console.log(pollingLocation);
	const destructurePollingLocation = () => {
		if (elections) {
			const pollAddress = elections.pollingLocations[0].address;
			console.log(pollAddress);
		}
	};
	return (
		<div>
			{federalElection ? (
				<div>
					<h2>{federalElection.name}:</h2>{" "}
					<h2>{federalElection.electionDay}</h2>
				</div>
			) : null}
			{/* {pollingLocation ? (
				<div>
					<h2>{pollingLocation[0].address.line1}</h2>{" "}
				</div>
			) : null} */}
			<h1>Vote</h1>
		</div>
	);
};
export default Vote;
