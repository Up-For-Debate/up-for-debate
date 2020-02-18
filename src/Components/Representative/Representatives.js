import React, { useState, useEffect } from "react";
import axios from "axios";
import RepCard from "../RepCard/RepCard";
import { HashLink as Link } from "react-router-hash-link";
import { connect } from "react-redux";
import { Grid, Button } from "@material-ui/core";

const Representatives = props => {
	const [offices, setOffices] = useState([]);
	const [officials, setOfficals] = useState([]);
	const [loading, setLoading] = useState(true);

	const filterRepName = repName => {
		const split = repName.split(" ");
		const countyIndex = split.indexOf("County");
		const spliced = split.splice(0, countyIndex);
		const string = spliced.toString().replace(",", "-");
		return string;
	};

	useEffect(() => {
		if (props.usState !== null) {
			getReps();
		}
	}, [props.usState]);

	useEffect(() => {
		if (offices[0] && officials[0]) {
			connectReps();
		}
	}, [officials]);

	const getReps = () => {
		setLoading(true);
		let { city, usState, setIsLoading } = props;
		if (city !== "" && usState !== "") {
			axios
				.get(
					`/api/representatives?address=City ${city} State ${usState}&session=true`
				)
				.then(res => {
					setOffices(res.data.offices);
					setOfficals(res.data.officials);
					setLoading(false);
					setIsLoading(false);
				});
			// axios.put(`/api/address?address=City ${city} State ${usState}`).then(res =>{
			//   }
			// )
		} else {
			axios
				.get(`/api/representatives?address=City ${city} State ${usState}`)
				.then(res => {
					// uncomment the above line and delete the below line when we no longer want to do styling/changes to representatives or rep cards
					// axios.get(`/api/representatives?address=vineyard utah`).then(res => {
					setOffices(res.data.offices);
					setOfficals(res.data.officials);
					setLoading(false);
					setIsLoading(false);
				});
		}
	};
	const connectReps = () => {
		const connectedReps = offices
			.map(ele => {
				return ele.officialIndices.map(element => {
					if (officials[element].address) {
						var repAddress = officials[element].address[0];
					}
					if (officials[element].urls) {
						var url = officials[element].urls[0];
					}
					if (officials[element].phones) {
						var phone = officials[element].phones[0];
					}
					const person = {
						divisionId: ele.divisionId,
						title: ele.name,
						officalName: officials[element].name,
						party: officials[element].party,
						address: repAddress, //This is an object
						url: url,
						phone: phone,
						socialMedia: officials[element].channels
							? officials[element].channels
							: null
					};
					return person;
				});
			})
			.flat();
		let countyReps = connectedReps
			.filter(ele => ele.divisionId.includes("county"))
			.map(rep => {
				return (
					<>
						<Grid item xs={12} sm={6}>
							<RepCard person={rep} />
						</Grid>
						<style>{`#${filterRepName(
							rep.title
						)}-county{fill: tomato;}`}</style>
					</>
				);
			});
		let stateReps = connectedReps
			.filter(
				ele =>
					ele.divisionId.includes("state") &&
					ele.divisionId.indexOf("county") === -1
			)
			.map(rep => {
				return (
					<Grid item xs={12} sm={6}>
						<RepCard person={rep} />
					</Grid>
				);
			});
		let fedReps = connectedReps
			.filter(
				ele =>
					ele.divisionId.includes("country") &&
					ele.divisionId.indexOf("state") === -1
			)
			.map(rep => {
				return (
					<Grid item xs={12} sm={6}>
						<RepCard person={rep} />
					</Grid>
				);
			});
		return (
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant="outlined" style={{marginLeft: '10px'}}>
            <Link to="#county-rep" style={{color: '#1d272d', textDecoration:'inherit'}}>County Info</Link>
          </Button>
          <Button variant="outlined" style={{marginLeft: '10px'}}>
            <Link to="#state-rep" style={{color: '#1d272d', textDecoration:'inherit'}}>State Info</Link>
          </Button>
          <Button variant="outlined" style={{marginLeft: '10px'}}>
            <Link to="#federal-rep" style={{color: '#1d272d', textDecoration:'inherit'}}>Federal Info</Link>
          </Button>
        </Grid>
        <Grid item xs={12}>
          <h2 id="county-rep" style={{marginLeft: '10px'}}>County Representatives</h2>
        </Grid>
        {countyReps}
        <Grid item xs={12}>
          <h2 id="state-rep" style={{marginLeft: '10px'}}>State Representatives</h2>
        </Grid>
        {stateReps}
        <Grid item xs={12}>
          <h2 id="federal-rep" style={{marginLeft: '10px'}}>Federal Representatives</h2>
        </Grid>
        {fedReps}
      </Grid>
		);
	};

	return <div>{!loading && connectReps() ? connectReps() : null}</div>;
};

const mapStateToProps = reduxState => {
	return reduxState;
};

export default connect(mapStateToProps, {})(Representatives);
