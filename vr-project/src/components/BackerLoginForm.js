import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl'

import { useHistory } from 'react-router-dom';
import * as yup from 'yup';

import axios from 'axios';


const formSchema = yup.object().shape({
  username: yup.string().required("Username is a required field"),
  password: yup.string().required("Password is a required field"),
  
});


// comment


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

export default function BackerLoginForm(props) {
  const classes = useStyles();

  const [formState, setFormState] = useState({
    username: "",
    password: "",
})

const [errorState, setErrorState] = useState({
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
    return history.push("/dashboard")
}

const submitForm = (e) => {
    e.preventDefault();
    setFormState({username: "", password: ""})
    axios
        .post("https://reqres.in/api/users", formState)
        .then(response => {console.log("Axios response from Backer Login submit", response); props.changeDisplayName.changeDisplayName(response.data)})
        .catch(err => {console.log("Axios error", err)});
        submitButton()
}


  return (
      <div style={{paddingTop: "4%"}}>
    <Card className={classes.root} style={{opacity: "0.9", marginLeft: "10%"}}>
      <CardContent>
      <Typography variant="h5" component="h2">
          Welcome Back!
        </Typography>
        <br />
  
        <form className={classes.form} noValidate autoComplete="off">
        <FormControl>
         <TextField 
             required 
             id="username" 
             name="username"
             label="Username" 
             value={formState.name}
             onChange={inputChange}
             variant="filled" />
             <Typography style={{color: 'red', fontSize: '10px'}}>{errorState.username}</Typography>
      </FormControl>
      <FormControl>
         <TextField 
             
            id="password" 
            name="password"
            label="Password" 
            value={formState.password}
            onChange={inputChange}
            variant="filled" 
            type="password" 
            required
            />
            <Typography style={{color: 'red', fontSize: '10px'}}>{errorState.password}</Typography>
      </FormControl>
      <CardActions>
        <Button onClick={submitForm} size="small">Submit</Button>
      </CardActions>
    </form>
       
      </CardContent>
      
    </Card>
    </div>
  );
}

