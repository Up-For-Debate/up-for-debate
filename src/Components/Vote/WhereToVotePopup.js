import React, { useState } from "react";
import { connect } from "react-redux";
import { setStreetAddressZipcode } from "../../redux/addressReducer";
import { withRouter } from "react-router-dom";

const WhereToVotePopup = props => {
	const [zipcode, setZipcode] = useState("");
	const [streetAddress, setStreetAddress] = useState("");

	const handleWhereToVoteClick = () => {
		props.setStreetAddressZipcode(streetAddress, zipcode);
		props.history.push("/vote");
	};

	return (
		<div
			style={{
				top: "30%",
				background: "white",
				height: "400px",
				width: "325px",
				position: "absolute",

				display: "flex",
				flexDirection: "column",
				justifyContent: "space-around",
				alignItems: "flex-start",
				zIndex: "999"
			}}
		>
			Please Enter Your Full Address:
			<p>
				Street Address:{" "}
				<input onChange={e => setStreetAddress(e.target.value)} />
			</p>
			<p>City: {props.city}</p>
			<p>State: {props.state}</p>
			<p>
				Zipcode: <input onChange={e => setZipcode(e.target.value)} />
			</p>
			<button onClick={() => handleWhereToVoteClick()}>
				Find Out Where To Vote!
			</button>
		</div>
	);
};

const mapStateToProps = reduxState => {
	return reduxState;
};
export default connect(mapStateToProps, { setStreetAddressZipcode })(
	withRouter(WhereToVotePopup)
);
