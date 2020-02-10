import React, { useState, useEffect } from "react";
import axios from "axios";

const Representatives = () => {
	const [reps, setReps] = useState({});

	useEffect(() => {
		axios
			.get("/api/representatives?address=vineyard utah")
			.then(res => console.log(res.data));
	});

	return <div>Representatives</div>;
};

export default Representatives;
