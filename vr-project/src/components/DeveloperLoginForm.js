import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    maxWidth: 275,
  },
  form: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    }},

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
}))

export default function DeveloperLoginForm() {
  const classes = useStyles();

  return (
      <div style={{paddingTop: "4%"}}>
    <Card className={classes.root} style={{opacity: "0.9", marginLeft: "10%"}}>
      <CardContent>
      <Typography variant="h5" component="h2">
          Welcome Back!
        </Typography>
        <br />
      
        <form className={classes.form} noValidate autoComplete="off">
      <TextField required id="username" label="Username" variant="filled" />
      <TextField required id="password" label="Password" variant="filled" type="password" />
      <CardActions>
        <Button size="small">Submit</Button>
      </CardActions>
    </form>
       
      </CardContent>
      
    </Card>
    </div>
  );
}

