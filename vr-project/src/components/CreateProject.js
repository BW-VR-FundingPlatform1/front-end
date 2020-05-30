import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl'
import jwt from 'jsonwebtoken';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';


const formSchema = yup.object().shape({
  name: yup.string().required("Project Name is a required field"),
  funding: yup.string().required("Funding is a required field"),
  image: yup.string().required("Image URL is a required field"),
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


export default function CreateProject(props) {
  const classes = useStyles();

  const [formState, setFormState] = useState({
    name: "",
    funding: "",
    image: "",
})

const [errorState, setErrorState] = useState({
  name: "",
  funding: "",
  image: "",
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

// const submitButton = () => {
//   return history.push("/backer-dashboard")
// }

const submitForm = (e) => {
    e.preventDefault();
    setFormState({name: "", funding: "", image: ""})
    axios
        // .post("http://localhost:4900/api/backer/login", formState)
        .post("", formState)
        .then(response => {
          const decoded = jwt.decode(response.data.token);
          console.log("Axios response from Create Project submit", response, decoded); 
          localStorage.setItem("token", response.data.token);
        //   setTimeout(()=>{history.push(`/backer-dashboard/${decoded.userId}`)},1000);
          })
        .catch(err => {console.log("Axios error", err)});
        // submitButton()
}

  return (
      <div style={{paddingTop: "4%"}}>
        <Card className={classes.root} style={{opacity: "0.9", marginLeft: "10%"}}>
           <CardContent>
              <Typography variant="h5" component="h2">
               Create Your New Project
              </Typography>
              <br />
           <form onSubmit={submitForm} className={classes.form} autoComplete="off">
              <FormControl required>
                 <TextField 
                 autoFocus
                 required={true} 
                 id="name" 
                 name="name"
                 label="name" 
                 value={formState.name}
                 onChange={inputChange}
                 variant="filled" 
                 isRequired="true"
                 />
                 <Typography style={{color: 'red', fontSize: '10px'}}>{errorState.name}</Typography>
              </FormControl>
              <FormControl required>
                 <TextField 
                 id="funding" 
                 name="funding"
                 label="funding" 
                 value={formState.funding}
                 onChange={inputChange}
                 variant="filled" 
                 type="text" 
                 required={true}
                 isRequired="true"
                 />
                 <Typography style={{color: 'red', fontSize: '10px'}}>{errorState.funding}</Typography>
               </FormControl>
               <FormControl required>
                 <TextField 
                 id="image" 
                 name="image"
                 label="image" 
                 value={formState.image}
                 onChange={inputChange}
                 variant="filled" 
                 type="text" 
                 required={true}
                 isRequired="true"
                 />
                 <Typography style={{color: 'red', fontSize: '10px'}}>{errorState.image}</Typography>
               </FormControl>
             <CardActions>
           <Button type="submit" size="small">Submit</Button>
          </CardActions>
        </form>
      </CardContent>
     </Card>
    </div>
 );
}

