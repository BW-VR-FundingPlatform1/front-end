import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import jwt from 'jsonwebtoken';
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

  console.log("Developer login props", props)

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

const submitButton = (token) => {
  return history.push(`/developer-dashboard/${token}`)
}

const submitForm = (e) => {
    e.preventDefault();
    // props.DeveloperDisplayName.DeveloperDisplayName(formState)
    setFormState({username: "", password: ""})
    axios
        // .post("http://localhost:4900/api/entrepreneur/login", formState)
        .post("https://vr-direct1.herokuapp.com/api/entrepreneur/login", formState)
        .then(response => {
          const decoded = jwt.decode(response.data.token);
          console.log("Axios response from Backer Login submit", response); 
          localStorage.setItem("token", response.data.token);
          // setTimeout(()=>{history.push(`/developer-dashboard/${decoded.userId}`)},1000);
          props.DeveloperDisplayName.DeveloperDisplayName(response, decoded)
          submitButton(decoded.userId)
        })

        .catch(err => {console.log("Axios error", err)});
    
}


  return (
      <div style={{paddingTop: "4%"}}>
    <Card className={classes.root} style={{opacity: "0.9", marginLeft: "10%"}}>
      <CardContent>
      <Typography variant="h5" component="h2">
          Welcome Back!
        </Typography>
        <br />
  
        <form onSubmit={submitForm} className={classes.form} autoComplete="off">
        {/* <FormControl> */}
         <TextField 
             autoFocus
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
        <Button type="submit" size="small">Submit</Button>
      </CardActions>
    </form>
       
      </CardContent>
      
    </Card>
    </div>
  );
}

