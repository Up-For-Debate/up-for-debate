import React, { useState } from "react";
import { connect } from "react-redux";
import { setStreetAddressZipcode } from "../../redux/addressReducer";
import { withRouter } from "react-router-dom";
import { TextField, Button, IconButton, Icon } from "@material-ui/core";
import ClearRoundedIcon from "@material-ui/icons/ClearRounded";

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
				position: "fixed",
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-around",
				alignItems: "flex-start",
				zIndex: "999",
				boxShadow: "4px 4px 4px 4px rgba(0, 0, 0, .5)",
				padding: "10px"
			}}
		>
			<IconButton
				onClick={() => props.setDisplayPopup(false)}
				style={{ position: "absolute", top: "10px", right: "10px" }}
			>
				<ClearRoundedIcon />
			</IconButton>
			<h2 style={{ padding: "5px" }}>Please Enter Your Full Address:</h2>
			<p>
				Street Address:{" "}
				<TextField
					id="outlined-required"
					label="Street Address"
					variant="outlined"
					onChange={e => setStreetAddress(e.target.value)}
					size="small"
					padding="dense"
					style={{ marginTop: "-10px" }}
					required
				/>
			</p>
			<p>
				City:{" "}
				<span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
					{props.city}
				</span>
			</p>
			<p>
				State:{" "}
				<span style={{ fontSize: "1.3rem", fontWeight: "bold" }}>
					{props.usState}
				</span>
			</p>
			<p>
				Zipcode:{" "}
				<TextField
					required
					id="outlined-required"
					label="Zipcode"
					variant="outlined"
					size="small"
					padding="dense"
					style={{ marginTop: "-10px" }}
					onChange={e => setZipcode(e.target.value)}
				/>
			</p>
			<div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
				<Button
					variant="contained"
					color="secondary"
					onClick={() => handleWhereToVoteClick()}
					sytle={{ marginLeft: "10%" }}
				>
					Find Out Where To Vote!
				</Button>
			</div>
		</div>
	);
};

const mapStateToProps = reduxState => {
	return reduxState;
};
export default connect(mapStateToProps, { setStreetAddressZipcode })(
	withRouter(WhereToVotePopup)
);
