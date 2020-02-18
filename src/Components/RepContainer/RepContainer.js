import React, { useState, useEffect } from "react";

const RepContainer = props => {
	const [county, setCounty] = useState([]);
	const [state, setState] = useState([]);
	const [federal, setFederal] = useState([]);

	useEffect(() => {
		if (props.person.divisionId.includes("county")) {
			setCounty([...county, { ...props.person }]);
			// console.log(county);
		} else if (props.person.divisionId.includes("state")) {
			setState([...state, props.person]);
			// console.log(state);
		} else {
			setFederal([...federal, props.person]);
			// console.log(federal);
		}
	}, []);
	// console.log(county);

	// if (props.person.divisionId.includes("county")) {
	// 	console.log(props.person);
	// 	setCounty(props.person);
	// } else if (props.person.divisionId.includes("state")) {
	// 	return (
	// 		<div>
	// 			<h2>State People</h2>
	// 		</div>
	// 	);
	// } else {
	// 	return (
	// 		<div>
	// 			<h2>Federal People</h2>
	// 		</div>
	// 	);
	// }

	return <div>RepContainer</div>;
};

export default RepContainer;
