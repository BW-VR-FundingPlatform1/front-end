import React from 'react';
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
    minWidth: 300,
    maxWidth: 345,
    
    flexGrow: 1,
  },
});

export default function LoginPageCards() {
  const classes = useStyles();

  return (
      <div>
          <Grid container  display="flex" justify="space-evenly" align="center">
              <Grid item xs={3}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image="https://images.pexels.com/photos/7066/man-relax-couch-study.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Funding Backer
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Financial support backing for those with a vision in VR development provides the opportunity to make dreams a virtual reality.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Login
        </Button>
        <Button size="small" color="primary">
          Signup
        </Button>
      </CardActions>
    </Card>
    </Grid>


<Grid item xs={3}>
<Card className={classes.root}>
<CardActionArea>
  <CardMedia
    component="img"
    alt="Contemplative Reptile"
    height="140"
    image="https://images.pexels.com/photos/1167134/pexels-photo-1167134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    title="Contemplative Reptile"
  />
  <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
      Project Developer
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
      Your vision takes VR to the next level and pushes the industry forward in new and exciting ways with new and innovative ideas.
    </Typography>
  </CardContent>
</CardActionArea>
<CardActions>
  <Button size="small" color="primary">
    Login
  </Button>
  <Button size="small" color="primary">
    Signup
  </Button>
</CardActions>
</Card>
</Grid>
</Grid>
</div>
  );
}
