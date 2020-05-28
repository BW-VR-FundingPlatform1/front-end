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

export default function DeveloperLoginForm(props) {


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
    return setTimeout(()=>{history.push("/developer-dashboard")},1000)
}

const submitForm = (e) => {
    e.preventDefault();
    setFormState({username: "", password: ""})
    axios
        // .post("http://localhost:4900/api/entrepreneur/login", formState)
        .post("https://vr-direct.herokuapp.com/api/entrepreneur/login", formState)
        .then(response => {
          console.log("Axios response from Backer Login submit", response); 
          localStorage.setItem("token", response.data.token)
          props.DeveloperDisplayName.DeveloperDisplayName(response.data.username)
        })

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
        {/* <FormControl> */}
         <TextField 
             required 
             id="username" 
             name="username"
             label="Username" 
             value={formState.name}
             onChange={inputChange}
             variant="filled" />
             <Typography style={{color: 'red', fontSize: '10px'}}>{errorState.username}</Typography>
      {/* </FormControl> */}
      {/* <FormControl> */}
         <TextField 
            required 
            id="password" 
            name="password"
            label="Password" 
            value={formState.password}
            onChange={inputChange}
            variant="filled" 
            type="password" />
             <Typography style={{color: 'red', fontSize: '10px'}}>{errorState.password}</Typography>
      {/* </FormControl> */}
      <CardActions>
        <Button onClick={submitForm} size="small">Submit</Button>
      </CardActions>
    </form>
       
      </CardContent>
      
    </Card>
    </div>
  );
}

