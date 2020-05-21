import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

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
}));

export default function NavAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "#07575B"}}>
        <Toolbar>
          <Link to="/" style={{textDecoration: "none", color: "white"}}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          
            <MenuIcon />
          </IconButton>
          </Link>
          <Typography variant="h6" className={classes.title}>
            VR Direct
          </Typography>
          <Link style={{textDecoration: "none", color: "white"}} to="/login">
          <Button color="inherit">Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
