import React from "react";
import { connect } from "react-redux";

const WhereToVotePopup = props => {
	return (
		<div>
			Please Enter Your Full Address:
			<input />
			City:
		</div>
	);
};

const mapStateToProps = reduxState => {
	return reduxState;
};
export default connect(mapStateToProps)(WhereToVotePopup);
