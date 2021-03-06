import React, {useState} from "react";
import { Link, withRouter } from "react-router-dom";
import "./Header.scss";
import { useTheme, makeStyles, IconButton } from "@material-ui/core";
import { Paper, Button, Drawer, Hidden } from "@material-ui/core";
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import ExploreIcon from '@material-ui/icons/Explore';
import HelpIcon from '@material-ui/icons/Help';


const Header = props => {
  const [drawerState, setDrawerState] = useState({right: false})

  // const theme = useTheme();
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
      zIndex: "1000",
      paddingLeft: 10,
      // paddingRight: 10
      
    
		},
    list: {
      width: 250
    }
  });
  const classes = useStyles();


  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setDrawerState({ ...drawerState, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
          <ListItem button key={'home'} onClick={ () => props.history.push(`/`)}>
              <ListItemIcon><HomeRoundedIcon/></ListItemIcon>
              <ListItemText primary={'Home'} />
          </ListItem>
          <ListItem button key={'explore'} onClick={ () => props.history.push(`/explore`)}>
            <ListItemIcon><ExploreIcon/></ListItemIcon>
            <ListItemText primary={'Explore'} />

          </ListItem>
          <ListItem button key={'quiz'} onClick={ () => props.history.push(`/quiz`)}>
            <ListItemIcon><HelpIcon /></ListItemIcon>
            <ListItemText primary={'Quiz'}/>
          </ListItem>
      </List>
    </div>
  );


  return (
    <>
    <Paper className={classes.paper} id="header-paper" elevation="5">
            <div className='logo-space' button onClick={ () => props.history.push('/')} > </div>

          <div 
            // className="header-explore" 
            style={{'justify-content':'flex-end', 'margin-right': "10px"}} >
        <Hidden xsDown>
            <Button id="explore" onClick={ () => props.history.push(`/explore`)}>
              <Link>Explore</Link>
            </Button>
            <Button>
              <Link id="quiz" onClick={ () => props.history.push(`/quiz`)}>Quiz</Link>
            </Button>
        </Hidden>
          </div>

          <div className="hidden-small" style={{'margin-right': '10px'}}>
            <IconButton onClick={toggleDrawer( 'right', true ) }>
              <MenuRoundedIcon />
            </IconButton>
          </div>

    </Paper>
    <div>
    <Drawer anchor="right" open={drawerState.right} onClose={toggleDrawer('right', false)}>
        {sideList('right')}
      </Drawer>
    </div>
    </>
  );
};

export default withRouter(Header);
