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
  FirstName: yup.string().required("First Name is a required field"),
  LastName: yup.string().required("Last Name is a required field"),
  email: yup.string().required("Email is a required field"),
  phone: yup.string().required("Phone Number is a required field"),
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
        FirstName: "",
        LastName: "",
        email: "",
        phone: "",
        username: "",
        password: "",
    })

    const [errorState, setErrorState] = useState({
        FirstName: "",
        LastName: "",
        email: "",
        phone: "",
        username: "",
        password: "",
    })

    const inputChange = (e) => {
      e.persist();
      validate(e);
      setFormState({...formState, [e.target.name]: e.target.value});
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
    setFormState({FirstName: "",
    LastName: "",
    email: "",
    phone: "",
    username: "",
    password: "",})
    axios
        // .post("https://localhost:4900/api/entrepreneur/register", formState)
        .post("https://vr-direct.herokuapp.com/api/backer/login", formState)
        .then(response => {console.log("Axios response from Backer Login submit", response)})
        .catch(err => {console.log("Axios error", err)});
        submitButton()
}
  
    const classes = useStyles();


  return (
      <div style={{paddingTop: "2%"}}>
        <Card className={classes.root} style={{opacity: "0.9", marginLeft: "40%", marginRight: "40%"}}>
         <CardContent>
           <Typography variant="h5" component="h2">
           Create Your Account
           </Typography>
           <br />
        <form onSubmit={submitForm} className={classes.form} autoComplete="off">
         <TextField required 
            autoFocus
            id="FirstName" 
            name="FirstName"
            label="First Name" 
            variant="filled"
            type="text"
            value={formState.FirstName}
            onChange={inputChange} 
            />
            <Typography style={{color: 'red', fontSize: '10px'}}>{errorState.FirstName}</Typography>
         <TextField required 
            id="LastName" 
            name="LastName"
            label="Last Name" 
            variant="filled"
            type="text"
            value={formState.LastName}
            onChange={inputChange} 
            />
            <Typography style={{color: 'red', fontSize: '10px'}}>{errorState.LastName}</Typography>
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
            id="phone" 
            name="phone"
            type="tel"
            label="Phone Number" 
            variant="filled" 
            value={formState.phone}
            onChange={inputChange} 
            />
            <Typography style={{color: 'red', fontSize: '10px'}}>{errorState.phone}</Typography>
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
        <Button type="submit" size="small">Submit</Button>
      </CardActions>
    </form>
  </CardContent> 
  </Card>
  </div>
  );
}

