import React from "react";
import { withRouter, Redirect } from "react-router-dom";
import { Card, CardActionArea } from "@material-ui/core";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";

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
  return (
    <Card className={classes.root} elevation="5">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          //  image={ if{props.person.socialMedia ? ( image = {`https://twitter.com/${props.person.socialMedia[0].id}/profile_image?size=original
          //   `}) : ()}

          title="Contemplative Reptile"
        />
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
      </CardActionArea>

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
