import React, { useEffect, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Card, CardActionArea } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import axios from "axios";

console.log('rep card exists')
const useStyles = makeStyles({
	root: {
		height: 300,
		maxWidth: 300
	},
	media: {
		height: "125px",
		width: "100%",
		marginTop: "10px",
		backgroundSize: "contain"
	}
});

const RepCard = props => {
	const classes = useStyles();
	const [profilePicture, setProfilePicture] = useState("");
	const [twitterPicture, setTwitterPicture] = useState("");
	const [facebookPicture, setFacebookPicture] = useState("");

	useEffect(
		() =>
		props.person.socialMedia
		? props.person.socialMedia.map(ele => {
			if (ele.type === "Twitter") {
				axios
				.get(`/api/representatives/picture?handle=${ele.id}`)
								.then(res => {
									setTwitterPicture(res.data);
								});
						} else if (ele.type === "Facebook") {
							setFacebookPicture(
								`https://graph.facebook.com/${ele.id}/picture?type=large`
								);
						} else {
							return null;
						}
				  })
				: null,
		[]
		);
		console.log('repcard useeffect fired')

		return (
			<Card className={classes.root} elevation="5">
			<CardActionArea>
				{props.person.socialMedia ? (
					twitterPicture ? (
						<CardMedia
							className={classes.media}
							image={twitterPicture}
							title="political profile image"
						/>
					) : (
						<CardMedia
							className={classes.media}
							image={facebookPicture}
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

			<CardContent>
				{props.person.socialMedia ? (
					<a
						target="_blank"
						rel="noopener"
						href={`https://www.facebook.com/${props.person.socialMedia[0].id}`}
					>
						<FacebookIcon fontSize="large" color="primary" />
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
						<TwitterIcon fontSize="large" style={{ color: "#1da1f1" }} />
					</a>
				) : (
					<div></div>
				)}
			</CardContent>
		</Card>
	);
};

export default withRouter(RepCard);
