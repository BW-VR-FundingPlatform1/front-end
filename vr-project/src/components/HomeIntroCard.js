import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    minWidth: 255,
    maxWidth: 255,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function HomeIntroCard() {
  const classes = useStyles();

  return (
      <div style={{paddingTop: "8%", paddingLeft: "4%"}}>
    <Card className={classes.root} variant="outlined" style={{backgroundColor: "black"}}>
      <CardContent>
        <Typography variant="h5" component="h2" style={{color: "white"}}>
          Welcome to VR Direct
        </Typography>
        <Typography variant="body2" component="p" style={{color: "lightgray"}}>
          A platform for developers with public funding to create virtual reality projects.
        </Typography>
      </CardContent>
      <CardActions>
          <Link to="/public-projects">
        <Button size="small" style={{color: "white"}}>See Latest Projects</Button>
        </Link>
        <Link to="/login">
        <Button size="small" style={{color: "white"}}>Login</Button>
        </Link>
      </CardActions>
    </Card>
    </div>
  );
}
