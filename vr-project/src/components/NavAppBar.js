import React from 'react';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import DetailsIcon from '@material-ui/icons/Details';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

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



export default function NavAppBar(props) {
  const classes = useStyles();

  console.log("Navbar props", props)

  

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: "black"}}>
        <Toolbar>
          <Link to="/" style={{textDecoration: "none", color: "white"}}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          
            <HomeIcon />
          </IconButton>
          </Link>
          

          
          <IconButton href="https://vrdirect.netlify.app/"   edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          
            
            <DetailsIcon />
         
          </IconButton>
          <Link to="/public-projects" style={{textDecoration: "none", color: "white"}}>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          
            <AttachMoneyIcon />
          </IconButton>
          </Link>
         
          
          <Typography variant="h6" className={classes.title}>
            VR Direct
          </Typography>
          <Link style={{textDecoration: "none", color: "white"}} to={props.displayName.route}>
          <Button color="inherit">{props.displayName.username}</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}
