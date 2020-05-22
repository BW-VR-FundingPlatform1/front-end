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

export default function DeveloperSignupForm() {
  const classes = useStyles();

  return (
      <div style={{paddingTop: "4%"}}>
    <Card className={classes.root} style={{opacity: "0.9", marginLeft: "40%", marginRight: "40%"}}>
      <CardContent>
      <Typography variant="h5" component="h2">
          Create Your Account
        </Typography>
        <br />
        <Typography className={classes.title} color="textSecondary" gutterBottom>
        <form className={classes.root} noValidate autoComplete="off">
        <TextField required id="firstname" label="First Name" variant="filled" />
        <TextField required id="lastname" label="Last Name" variant="filled" />
        <TextField required id="email" label="Email" variant="filled" />
        <TextField required id="phonenumber" label="Phone Number" variant="filled" />
      <TextField required id="username" label="Username" variant="filled" />
      <TextField required id="password" label="Password" variant="filled" type="password" />
      <CardActions>
        <Button size="small">Submit</Button>
      </CardActions>
    </form>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
  );
}

