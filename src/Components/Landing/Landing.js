import React from "react";
import "./Landing.scss";
import SearchInput from "../SearchInput/SearchInput";
import { Grid, Paper } from "@material-ui/core";
import { useTheme, makeStyles } from "@material-ui/core";
import { findByLabelText } from "@testing-library/react";

const Landing = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    paper: {
      height: 300,
      width: "58%",
      minWidth: 360,
      maxWidth: 600,
      marginTop: "5%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }
  });
  const classes = useStyles();
  return (
    <div className="landing-background">
      <Paper className={classes.paper} elevation="5" id="landing-paper">
        <h1
          className="landing-header"
          style={{ marginTop: "-40px", paddingBottom: "2%" }}
        >
          Up for Debate
        </h1>
        <br />
        <SearchInput />
      </Paper>
    </div>
  );
};

export default Landing;
