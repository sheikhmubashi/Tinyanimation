import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import logo from '../images/Logo1.svg';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,

  },
  menuButton: {
    marginRight: theme.spacing(2),

  },
  title: {
    flexGrow: 1,
  },
  AppBar: {
    backgroundColor: "#155f61",
  },
 
  logo: {
    maxWidth: 50,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        {/* <Box width={100} height={150} zIndex={1100}></Box> */}
        <Toolbar>
          <Box display='flex' flexGrow={1}>
          <img src={logo} alt="logo" className={classes.logo} />
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography> */}
          </Box>
          <div >
            <Button color="inherit">How it works</Button>
            <Button color="inherit">Apply</Button>
            <Button color="inherit">Available Programs</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">WIT</Button>
          </div>

        </Toolbar>
      </AppBar>
    </div>
  );
}
