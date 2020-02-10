import React, { useState, useEffect } from "react";
import axios from "axios";
import RepCard from "../RepCard/RepCard";

const Representatives = () => {
	const [reps, setReps] = useState({});
	const [offices, setOffices] = useState([]);
	const [officials, setOfficals] = useState([]);
	const [facebook, setFacebook] = useState([]);

	useEffect(() => {
		getReps();
	}, []);

	useEffect(() => {
		if (offices[1] && officials[1]) {
			connectReps();
		}
	}, [offices, officials]);

	const getReps = async () => {
		await axios.get("/api/representatives?address=vineyard utah").then(res => {
			setOffices(res.data.offices);
			setOfficals(res.data.officials);
		});
	};
	console.log(offices);
	console.log(officials);

	const connectReps = () => {
		offices.map(ele => {
			console.log(ele.name);
			const repCards = ele.officialIndices.map(element => {
				console.log(officials[element].name);
				console.log(officials[element].party);
				if (officials[element].address) {
					var repAddress = officials[element].address[0];
				}
				if (officials[element].urls) {
					var url = officials[element].urls[0];
				}
				if (officials[element].phones) {
					var phone = officials[element].phones[0];
				}

				console.log(repAddress);

				return (
					<RepCard
						name={officials[element].name}
						party={officials[element].party}
						address={repAddress}
						url={url}
						phone={phone}
						socialMedia={
							officials[element].channels ? officials[element].channels : null
						}
					/>
				);
			});
		});
	};

	return <div>Representatives</div>;
};

export default Representatives;
