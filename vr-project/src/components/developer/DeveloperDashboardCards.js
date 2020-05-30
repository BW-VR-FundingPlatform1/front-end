import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
  root: {
    minWidth: 345,
    maxWidth: 385,
  },
  flex: {
    flexGrow: 1,
  },
  media: {
    height: 180,
  },
});

const dashboardData = [
    {
      img: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      company: "Jungle George",
      style: "Meditate with tons of confusing lines of code.",
      funding: "$12,593 to go!",

  },
  {
      img: "https://images.pexels.com/photos/4009621/pexels-photo-4009621.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      company: "Jungle George",
      style: "Cheap Date Night Simulator.",
      funding: "$32,155 to go!",

  },
]

export default function DeveloperDashboardCards() {
  const classes = useStyles();

  return (
      <div style={{margin: "6%", marginTop: "1%"}} >
          
          <div className={classes.flex}>
          <h2 style={{color: "white", marginBottom: "4%", marginLeft: "auto"}}>Your Projects</h2>
    <Grid container spacing={6} direction="row" display="flex" justify="space-between" align="center">
          {dashboardData.map(comp => {
              return(
 
             <Grid item xs>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={comp.img}
          title={comp.company}
        />
        <CardContent>
          <Typography style={{fontSize: "1.1rem"}} gutterBottom variant="h5" component="h3">
            {comp.company}
          </Typography>
          <Typography style={{fontSize: "0.8rem"}} variant="body2" color="textSecondary" component="p">
          {comp.style}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Button size="small" color="primary">
          {comp.funding}
        </Button>
      </CardActions>
    </Card>
    </Grid>
    )})}
    </Grid>
    </div>
    </div>
  );
}
