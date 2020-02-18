import React, { useEffect, useState } from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Card, CardActionArea } from "@material-ui/core";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import axios from "axios";

const useStyles = makeStyles({
  root: {
    height: 325,
    background: "whitesmoke",
    marginLeft: 10
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
  const [facebook, setFacebook] = useState(<></>);
  const [twitter, setTwitter] = useState(<></>);

  useEffect(() => {
    if (props.person.socialMedia) {
      props.person.socialMedia.forEach(ele => {
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
        }
      });
      props.person.socialMedia.map((e, i) => {
        if (e.type === "Facebook") {
          setFacebook(
            <a
              target="_blank"
              rel="noopener"
              href={`https://www.facebook.com/${props.person.socialMedia[i].id}`}
            >
              <FacebookIcon fontSize="large" style={{ color: "#3b5998" }} />
            </a>
          );
        } else if (e.type === "Twitter") {
          setTwitter(
            <a
              target="_blank"
              rel="noopener"
              href={`https://www.twitter.com/${props.person.socialMedia[i].id}`}
            >
              <TwitterIcon fontSize="large" style={{ color: "#1da1f1" }} />
            </a>
          );
        }
      });
    }
  }, []);

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
              "https://res.cloudinary.com/dx8jjuurn/image/upload/v1582045424/ufd-image_fo2vrs.png"
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
          {props.person.address ? (
            <p>
              {props.person.address.line1} {props.person.address.city}{" "}
              {props.person.address.state} {props.person.address.zip}
            </p>
          ) : null}
        </Typography>
      </CardContent>

      <CardContent>
        {facebook}
        {twitter}
      </CardContent>
    </Card>
  );
};

export default withRouter(RepCard);
