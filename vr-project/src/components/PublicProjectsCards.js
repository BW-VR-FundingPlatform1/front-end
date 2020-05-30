import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';

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
        img: "https://images.pexels.com/photos/3183143/pexels-photo-3183143.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        company: "DystopiaTech",
        style: "Fun! Learn tax regulations in VR.",
        funding: "$12,590 to go!",

    },
    {
        img: "https://images.pexels.com/photos/1261824/pexels-photo-1261824.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        company: "Nature Life TM",
        style: "Live the life of a bear and terrorize the neigborhood!",
        funding: "$188 to go!",

    },
    {
        img: "https://images.pexels.com/photos/373905/pexels-photo-373905.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        company: "IndieBread",
        style: "Watch people eat sandwiches in real time.",
        funding: "$3,892 to go!",

    },
    {
        img: "https://images.pexels.com/photos/166055/pexels-photo-166055.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        company: "DriveTech",
        style: "'Endanger the lives of others' game!",
        funding: "$1,229 to go!",

    },
    {
        img: "https://images.pexels.com/photos/3761308/pexels-photo-3761308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        company: "lifeEdge Inc.",
        style: "Get Boo'd off stage with this heckler simulator.",
        funding: "$634 to go!",

    },
    {
        img: "https://images.pexels.com/photos/911682/pexels-photo-911682.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        company: "Y Tho Inc.",
        style: "Stare at the Sun in VR!",
        funding: "$5,955 to go!",

    },
]

export default function PublicProjectsCards() {

  const [projects, setProjects] = useState([]);
  useEffect(() => {
      axios 
      .get('')
      .then(response => {
        console.log("Public Projects Axios Get", response);
        setProjects(response.data)
      })
      .catch(err => {
        console.error("Server Error", err);
      });
  }, [])



  const classes = useStyles();

  return (
      <div style={{margin: "6%", marginTop: "1%"}} >
          
          <div className={classes.flex}>
          <h2 style={{color: "white", marginBottom: "4%", marginLeft: "auto"}}>Checkout These Latest Projects From Developers!</h2>
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
        {/* <Link to="/login" style={{textDecoration: "none"}}> */}
        <Button size="small" color="primary" >
          Learn More
        </Button>
        {/* </Link> */}
        {/* <Link to="/login" style={{textDecoration: "none"}}> */}
        <Button size="small" color="primary">
          {comp.funding}
        </Button>
        {/* </Link> */}
      </CardActions>
    </Card>
    </Grid>
    )})}
    </Grid>
    </div>
    </div>
  );
}
