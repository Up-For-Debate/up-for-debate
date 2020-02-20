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
      height: "94vh",
      width: "100vw",
      marginTop: "0vh",
      display: "flex",
      flexDirection: "column",
      // justifyContent: "center",
      alignItems: "center"
    }
  });
  const classes = useStyles();
  return (
    <div className="landing-background">
      <Paper className={classes.paper} id="landing-paper" elevation={5}>
        <Paper
          className="input-holder"
          elevation={3}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#ebebeb",
            marginTop: "15vh",
            height: "50%",
            width: "62%"
          }}
        >
          <h1
            className="landing-header"
            style={{ marginTop: "-5%", marginBottom: "3%" }}
          >
            Up for Debate
          </h1>
          <center
            className="landing-header"
            style={{
              fontSize: "16px",
              fontFamily: "Muli",
              color: "#37474F",
              fontWeight: 700,
              marginBottom: "1%"
            }}
          >
            The one stop for finding all of your government representative
            information.
          </center>
          <br />
          <SearchInput />
        </Paper>
      </Paper>
    </div>
  );
};

export default Landing;
