import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useHistory } from 'react-router-dom';

import axios from 'axios';


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

export default function DeveloperSignupForm(props) {
  
  
    const [formState, setFormState] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        username: "",
        password: "",
    })

    const inputChange = (e) => {
        setFormState({...formState, [e.target.name]: e.target.value});
        console.log("Typing stuff", formState)
    }

    let history = useHistory();

const submitButton = () => {
    return history.push("/dashboard")
}

const submitForm = (e) => {
    e.preventDefault();
    setFormState({firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    username: "",
    password: "",})
    axios
        .post("https://reqres.in/api/users", formState)
        .then(response => {console.log("Axios response from Backer Login submit", response); props.changeDisplayName.changeDisplayName(response.data)})
        .catch(err => {console.log("Axios error", err)});
        submitButton()
}
  
  
    const classes = useStyles();



  return (
      <div style={{paddingTop: "2%"}}>
    <Card className={classes.root} style={{opacity: "0.7", marginLeft: "40%", marginRight: "40%"}}>
      <CardContent>
      <Typography variant="h5" component="h2">
          Create Your Account
        </Typography>
        <br />
        
        <form className={classes.form} noValidate autoComplete="off">
        <TextField required 
            id="firstname" 
            name="firstname"
            label="First Name" 
            variant="filled"
            type="text"
            value={formState.firstname}
            onChange={inputChange} 
            />
        <TextField required 
            id="lastname" 
            name="lastname"
            label="Last Name" 
            variant="filled"
            type="text"
            value={formState.lastname}
            onChange={inputChange} 
            />
        <TextField required 
            id="email" 
            name="email"
            label="Email" 
            type="email"
            variant="filled" 
            value={formState.email}
            onChange={inputChange} 
            />
        <TextField required 
            id="phonenumber" 
            name="phonenumber"
            label="Phone Number" 
            variant="filled" 
            value={formState.phonenumber}
            onChange={inputChange} 
            />
         <TextField required 
            id="username" 
            name="username"
            label="Username" 
            variant="filled"
            type="text"
            value={formState.username}
            onChange={inputChange} 
            />
        <TextField required 
            id="password" 
            name="password"
            label="Password" 
            variant="filled" 
            type="password" 
            value={formState.password}
            onChange={inputChange}
            />
      <CardActions>
        <Button onClick={submitForm} size="small">Submit</Button>
      </CardActions>
    </form>
        
      </CardContent>
      
    </Card>
    </div>
  );
}

