import React, { useEffect, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Card, CardActionArea } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import Axios from "axios";

const useStyles = makeStyles({
	root: {
		maxWidth: 300
	},
	media: {
		height: 25,
		paddingTop: "20%"
	}
});

const RepCard = props => {
	const classes = useStyles();
	const [profilePicture, setProfilePicture] = useState("");

	useEffect(
		() =>
			props.person.socialMedia
				? Axios.get(
						`/api/representatives/picture?handle=${props.person.socialMedia[0].id}`
				  ).then(res => {
						console.log(res.data);
						setProfilePicture(res.data);
				  })
				: null,
		[]
	);

	return (
		<Card className={classes.root} elevation="5">
			<CardActionArea>
				{props.person.socialMedia ? (
					props.person.socialMedia[0].id === "Facebook" ? (
						<CardMedia
							className={classes.media}
							image={profilePicture}
							title="political profile image"
						/>
					) : (
						<CardMedia
							className={classes.media}
							image={profilePicture}
							title="profile image"
						/>
					)
				) : (
					<CardMedia
						className={classes.media}
						image={
							"https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_960,f_auto/10140482_den8mp.png"
						}
						title="default image"
					/>
				)}
			</CardActionArea>

			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{props.person.officalName}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{props.person.title}
					<p>{props.person.party}</p>
				</Typography>
			</CardContent>
			<Button size="medium" color="primary">
				Learn More
			</Button>

			<CardContent>
				{props.person.socialMedia ? (
					<a
						target="_blank"
						rel="noopener"
						href={`https://www.facebook.com/${props.person.socialMedia[0].id}`}
					>
						FB
					</a>
				) : (
					<div></div>
				)}
				{props.person.socialMedia ? (
					<a
						target="_blank"
						rel="noopener"
						href={`https://www.twitter.com/${props.person.socialMedia[0].id}`}
					>
						TWR
					</a>
				) : (
					<div></div>
				)}
			</CardContent>
		</Card>
	);
};

export default withRouter(RepCard);
