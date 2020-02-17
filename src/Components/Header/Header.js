import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import { useTheme, makeStyles, IconButton } from "@material-ui/core";
import { Paper, Button, Grid, Drawer } from "@material-ui/core";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';


const Header = () => {
  const [drawerState, setDrawerState] = useState(false)

  const theme = useTheme();
  const useStyles = makeStyles({
    paper: {
			height: "6vh",
			width: "100vw",
			display: "flex",
			justifyContent: "space-between",
			alignItems: "center",
			fontFamily: "Muli, sans-serif",
			position: "sticky",
			top: "0",
			zIndex: "1000"
		},
    list: {
      width: 250
    }
  });
  const classes = useStyles();


  const toggleDrawer =  () => {
    setDrawerState(!drawerState)
  }

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer}
      onKeyDown={toggleDrawer}
    >
      <List>
        {['Home', 'Explore', 'Quiz'].map((text, index) => (
          <ListItem button key={text}>
            <Link>
              <ListItemText primary={text} />
            </Link>
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (
    <>
    <Paper className={classes.paper} id="header-paper" elevation="5">
      <Grid container spacing={3}>

        <Grid item xs={3} sm={3} md={3} lg={3} xl={3} className="header-home">
          <Button id="home-button">
            <Link>Home</Link>
          </Button>
        </Grid>

        <div className="header-explore">
          <Button id="explore">
            <Link>Explore</Link>
          </Button>
          <Button>
            <Link id="quiz">Quiz</Link>
          </Button>
        </div>
        <IconButton onClick={ toggleDrawer }>
          <MenuRoundedIcon />
        </IconButton>

      </Grid>
    </Paper>
    <div>
    <Drawer anchor="right" open={drawerState} >
        {sideList('right')}
      </Drawer>
    </div>
    </>
  );
};

export default Header;
