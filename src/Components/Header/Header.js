import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useTheme, makeStyles } from "@material-ui/core";
import { Paper, Button } from "@material-ui/core";

const Header = () => {
  const theme = useTheme();
  const useStyles = makeStyles({
    paper: {
      height: "6vh",
      width: "100vw",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontFamily: "Muli, sans-serif",
      position: "fixed"
    }
  });
  const classes = useStyles();
  return (
    <Paper className={classes.paper} id="header-paper" elevation="5">
      <div className="header-home">
        <Button id="home-button">
          <Link>Home</Link>
        </Button>
      </div>
      <div className="header-explore">
        <Button id="explore">
          <Link>Explore</Link>
        </Button>
        <Button>
          <Link id="quiz">Quiz</Link>
        </Button>
      </div>
    </Paper>
  );
};

export default Header;
