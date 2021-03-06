import React, { useState, useEffect } from "react";
import axios from "axios";
// import { HashLink as Link } from "react-router-hash-link";
import WhereToVotePopup from "../Vote/WhereToVotePopup";
import Representatives from "../Representative/Representatives";
import CountyMap from "../CountyMap/CountyMap";
import { withRouter } from "react-router-dom";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { connect } from "react-redux";
import { Grid, Paper, Button } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core/styles";
import RegisterToVote from "../RegisterToVote/RegisterToVote";
import "./Dashboard.scss";
import { getCityState } from "../../redux/addressReducer";

const Dashboard = props => {
  const [displayPopup, setDisplayPopup] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();
  const useStyles = makeStyles({
    paper: {
      position: "absolute",
      top: "6vh",
      height: 75,
      width: "100vw",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center"
    }
  });

  const classes = useStyles();
  // console.log(props.usState);

  return (
    <>
      {isLoading ? (
        <div
          style={{
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Loader
            type="CradleLoader"
            // color="#00BFFF"
            height={100}
            width={100}
            // timeout={3000}
          />
          <Representatives setIsLoading={setIsLoading} isLoading={isLoading} />
        </div>
      ) : (
        <Grid
          container
          className="dashboard"
          theme={theme}
          style={{
            backgroundColor: "#ebebeb",
            marginTop: "6vh"
          }}
          spacing={0}
        >
          <Grid item xs={12} className="link-area">
            <Paper
              theme={theme}
              square
              elevation={3}
              style={{ backgroundColor: theme.palette.primary.dark }}
              className={classes.paper}
            >
              <RegisterToVote />
              <Button
                variant="contained"
                color="secondary"
                style={{
                  fontWeight: "bolder",
                  color: "white"
                }}
                onClick={() => setDisplayPopup(!displayPopup)}
              >
                Where to vote
              </Button>

              {displayPopup ? (
                <WhereToVotePopup setDisplayPopup={setDisplayPopup} />
              ) : null}
            </Paper>
          </Grid>
          <Grid item sm={12} md={8} className="rep-area">
            <Representatives
              setIsLoading={setIsLoading}
              isLoading={isLoading}
            />
          </Grid>
          <Grid item sm={12} md={4} className="map-area">
            <CountyMap />
          </Grid>
        </Grid>
      )}
    </>
  );
};

const mapStateToProps = reduxState => {
  return reduxState;
};

export default connect(mapStateToProps)(withRouter(Dashboard));
