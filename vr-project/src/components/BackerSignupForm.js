import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { useHistory } from 'react-router-dom';
import * as yup from 'yup';

import axios from 'axios';

const formSchema = yup.object().shape({
  firstname: yup.string().required("First Name is a required field"),
  lastname: yup.string().required("Last Name is a required field"),
  email: yup.string().required("Email is a required field"),
  phonenumber: yup.string().required("Phone Number is a required field"),
  username: yup.string().required("Username is a required field"),
  password: yup.string().required("Password is a required field"),
  
});


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

export default function BackerSignupForm(props) {
  
  
    const [formState, setFormState] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        username: "",
        password: "",
    })

    const [errorState, setErrorState] = useState({
      firstname: "",
        lastname: "",
        email: "",
        phonenumber: "",
        username: "",
        password: "",
    })

    const inputChange = (e) => {
      e.persist();
    validate(e);
        setFormState({...formState, [e.target.name]: e.target.value});
        console.log("Typing stuff", formState)
    }

    const validate = e => {
      yup.reach(formSchema, e.target.name).validate(e.target.value)
      .then(valid => {
          setErrorState({
              ...errorState, [e.target.name]: ""
          });
      })
      .catch(err => {
          console.log("errors", err.errors);
          setErrorState({
              ...errorState, [e.target.name]: err.errors[0]
          });
      });
    };

    let history = useHistory();

const submitButton = () => {
    return history.push("/backer-login")
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
            <Typography style={{color: 'red', fontSize: '10px'}}>{errorState.firstname}</Typography>
        <TextField required 
            id="lastname" 
            name="lastname"
            label="Last Name" 
            variant="filled"
            type="text"
            value={formState.lastname}
            onChange={inputChange} 
            />
            <Typography style={{color: 'red', fontSize: '10px'}}>{errorState.lastname}</Typography>
        <TextField required 
            id="email" 
            name="email"
            label="Email" 
            type="email"
            variant="filled" 
            value={formState.email}
            onChange={inputChange} 
            />
            <Typography style={{color: 'red', fontSize: '10px'}}>{errorState.email}</Typography>
        <TextField required 
            id="phonenumber" 
            name="phonenumber"
            label="Phone Number" 
            variant="filled" 
            value={formState.phonenumber}
            onChange={inputChange} 
            />
            <Typography style={{color: 'red', fontSize: '10px'}}>{errorState.phonenumber}</Typography>
         <TextField required 
            id="username" 
            name="username"
            label="Username" 
            variant="filled"
            type="text"
            value={formState.username}
            onChange={inputChange} 
            />
            <Typography style={{color: 'red', fontSize: '10px'}}>{errorState.username}</Typography>
        <TextField required 
            id="password" 
            name="password"
            label="Password" 
            variant="filled" 
            type="password" 
            value={formState.password}
            onChange={inputChange}
            />
            <Typography style={{color: 'red', fontSize: '10px'}}>{errorState.password}</Typography>
      <CardActions>
        
        <Button onClick={submitForm} size="small">Submit</Button>
    
      </CardActions>
    </form>
        
      </CardContent>
      
    </Card>
    </div>
  );
}

