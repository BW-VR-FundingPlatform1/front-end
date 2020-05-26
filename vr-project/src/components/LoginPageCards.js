import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    minWidth: 315,
    maxWidth: 315,
    
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
    alignItems: "center"
  }
});

export default function LoginPageCards() {
  const classes = useStyles();

  return (
      <div style={{marginLeft: "15%", paddingTop: "4%"}}>
          <Grid className={classes.flex} container spacing={4} direction="row" display="flex" justify="space-between" alignItems="center">
            
              <Grid item xs>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://images.pexels.com/photos/935756/pexels-photo-935756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          title="Contemplative Reptile"
        />
        <CardContent style={{backgroundColor: "black", color: "white"}}>
          <Typography gutterBottom variant="h5" component="h2">
            Funding Backer
          </Typography>
          <Typography variant="body2" style={{color: "lightgray"}} component="p">
            Financial support backing for those with a vision in VR development provides the opportunity to make dreams a virtual reality.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{backgroundColor: "black", color: "white"}}>
        <Link to="/backer-login">
        <Button size="small" style={{color: "white"}}>
          Login
        </Button>
        </Link>
        <Link to="/backer-signup">
        <Button size="small" style={{color: "white"}}>
          Signup
        </Button>
        </Link>
      </CardActions>
    </Card>
    </Grid>

   
<Grid item xs>
<Card className={classes.root}>
<CardActionArea>
  <CardMedia
    component="img"
    alt="Contemplative Reptile"
    height="140"
    image="https://images.pexels.com/photos/1167134/pexels-photo-1167134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    title="Contemplative Reptile"
  />
  <CardContent style={{backgroundColor: "black", color: "white"}}>
    <Typography gutterBottom variant="h5" component="h2">
      Project Developer
    </Typography>
    <Typography variant="body2" style={{color: "lightgray"}} component="p">
      Your vision takes VR to the next level and pushes the industry forward in new and exciting ways with fresh and innovative ideas.
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions style={{backgroundColor: "black", color: "white"}}>
<Link to="/developer-login">
  <Button size="small" style={{color: "white"}}>
    Login
  </Button>
  </Link>
  <Link to="/developer-signup">
  <Button size="small" style={{color: "white"}}>
    Signup
  </Button>
  </Link>
</CardActions>
</Card>
</Grid>
</Grid>
</div>
  );
}
