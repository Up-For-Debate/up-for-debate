import React from "react";
// import { HashLink as Link } from "react-router-hash-link";
import Representatives from "../Representative/Representatives";
import CountyMap from "../CountyMap/CountyMap";
import { Grid, Paper, Button } from "@material-ui/core";
import { useTheme, makeStyles } from '@material-ui/core/styles'

const Dashboard = () => {

  const theme = useTheme()
  const useStyles = makeStyles({
    paper: {height: 75, display: "flex", justifyContent: "space-evenly", alignItems: "center" } 
  })
  const classes = useStyles()
  
  return (
    <Grid container className="dashboard" theme={theme} style={{backgroundColor: theme.palette.primary.light}} >
      <Grid item xs={12} className="link-area">
        <Paper theme={theme} elevation={3} style={{backgroundColor: theme.palette.primary.dark}} className={classes.paper} >
          <Button variant="contained" color="secondary">
            Register to vote
          </Button> 
          <Button variant="contained" color="secondary">
            Where to vote
          </Button>
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
