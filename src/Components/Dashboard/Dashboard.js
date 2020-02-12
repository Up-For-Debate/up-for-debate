import React from "react";
// import { HashLink as Link } from "react-router-hash-link";
import Representatives from "../Representative/Representatives";
import CountyMap from "../CountyMap/CountyMap";
import { Grid, Paper, Button } from "@material-ui/core";

const Dashboard = () => {
  return (
    <Grid container className="dashboard">
      <Grid item xs={12} className="link-area">
        <Paper color="dark">
          <Button variant="contained" color="primary">
            Register to vote
          </Button>{" "}
          <br />
          <Button variant="contained" color="secondary">
            Where to vote
          </Button>{" "}
          <br />
        </Paper>
      </Grid>
      <Grid item xs={8} className="rep-area">
        <Representatives />
      </Grid>
      <Grid item xs={4} className="map-area">
        {/* <CountyMap /> */}
      </Grid>
    </Grid>
  );
};

export default Dashboard;
