import React, { useState } from "react";
// import { HashLink as Link } from "react-router-hash-link";
import WhereToVotePopup from "../Vote/WhereToVotePopup";
import Representatives from "../Representative/Representatives";
import CountyMap from "../CountyMap/CountyMap";
import { Grid, Paper, Button } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import RegisterToVote from "../RegisterToVote/RegisterToVote";
import './Dashboard.scss'

const Dashboard = () => {
	const [displayPopup, setDisplayPopup] = useState(false);
	const theme = useTheme();
	const useStyles = makeStyles({
		paper: {
			height: 75,
			display: "flex",
			justifyContent: "space-evenly",
			alignItems: "center"
		}
	});
	const classes = useStyles();
	console.log(displayPopup);
	return (
		<Grid
			container
			className="dashboard"
			theme={theme}
			style={{ backgroundColor: theme.palette.primary.light }}
			spacing={3}
		>
			<Grid item xs={12} className="link-area">
				<Paper
					theme={theme}
					elevation={3}
					style={{ backgroundColor: theme.palette.primary.dark }}
					className={classes.paper}
				>
					<RegisterToVote />
					<Button
						variant="contained"
						color="secondary"
						onClick={() => setDisplayPopup(!displayPopup)}
					>
						Where to vote
					</Button>

					{displayPopup ? <WhereToVotePopup /> : null}
				</Paper>
			</Grid>
			<Grid item sm={12} md={8} className="rep-area">
				<Representatives />
			</Grid>
			<Grid item sm={12} md={4} className="map-area" >
				<CountyMap />
			</Grid>
		</Grid>
	);
};

export default Dashboard;
