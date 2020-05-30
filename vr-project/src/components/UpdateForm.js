import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl'
import jwt from 'jsonwebtoken';
import { useHistory, useParams } from 'react-router-dom';
import * as yup from 'yup';
import axios from 'axios';
import {axiosWithAuth} from '../utils/axiosWithAuth'; 


const formSchema = yup.object().shape({
  projectName: yup.string().required("Project Name is a required field"),
  fundingAmount: yup.string().required("Funding is a required field"),
  img: yup.string().required("Image URL is a required field"),
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
    projectName: "",
    fundingAmount: "$",
    img: "",
})

const [errorState, setErrorState] = useState({
  projectName: "",
  fundingAmount: "",
  img: "",
})

useEffect(() => {
    axiosWithAuth() 
    .get(`/api/entrepreneur/projects/${id}`)
    .then(response => {
      console.log("Public Projects Axios Get", response);
      setFormState(response.data)
    })
    .catch(err => {
      console.error("Server Error", err);
    });
}, [])

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
let params = useParams();
const id = params.id


const submitButton = () => {
  return history.push(`/developer-dashboard/${formState.developer_id}`)
}

const submitForm = (e) => {
    e.preventDefault();
    setFormState({name: "", funding: "$", image: ""})
    
    axiosWithAuth()
        // .post(`http://localhost:4900/api/entrepreneur/${id}/projects`, formState)
        .put(`/api/entrepreneur/projects/${id}`, formState)
        .then(response => {
          console.log("Axios response from Create Project submit", response); 
          submitButton()
          })
        .catch(err => {console.log("Axios error", err)});
        
}

  return (
      <div style={{paddingTop: "4%"}}>
        <Card className={classes.root} style={{opacity: "0.9", marginLeft: "10%"}}>
           <CardContent>
              <Typography variant="h5" component="h2">
               Update Your Project
              </Typography>
              <br />
           <form onSubmit={submitForm} className={classes.form} autoComplete="off">
              <FormControl required>
                 <TextField 
                 autoFocus
                 required={true} 
                 id="projectName" 
                 name="projectName"
                 label="Name Of Project" 
                 value={formState.projectName}
                 onChange={inputChange}
                 variant="filled" 
                 isRequired="true"
                 />
                 <Typography style={{color: 'red', fontSize: '10px'}}>{errorState.name}</Typography>
              </FormControl>
              <FormControl required>
                 <TextField 
                 id="fundingAmount" 
                 name="fundingAmount"
                 label="Money Required for Funding" 
                 value={formState.fundingAmount}
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
                 id="img" 
                 name="img"
                 label="Image Address URL" 
                 value={formState.img}
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
           <Button size="small" onClick={()=>history.push(`/developer-dashboard/${formState.developer_id}`)}>Cancel</Button>
          </CardActions>
        </form>
      </CardContent>
     </Card>
    </div>
 );
}

