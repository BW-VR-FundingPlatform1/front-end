import React from 'react'

import { Spring } from 'react-spring/renderprops';

import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import DeveloperDashboardCards from './DeveloperDashboardCards';



const DeveloperDashboard = (props) => {

let history = useHistory();

const signoutButton = () => {
    localStorage.removeItem("token")
    return history.push("/");
    
}


    return(
        <div>
        
             <Spring
        config={{duration: 650}}
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        >
          {springProps=>(
           <div style={springProps}>
               <div className="developer-dashboard-image">
            
            <Grid container display="flex" justify="flex-end">
            <Link to='/backer-dashboard/:id/new-project' style={{textDecoration: "none", color: "white", paddingRight: "2%"}}>
                <Button style={{color: "white", backgroundColor: "black", opacity: "0.7"}}>Add Project</Button>
            </Link>
            <Button onClick={() => {props.resetDisplayName(); signoutButton()}} style={{paddingRight: "2%", color: "white"}}>Sign Out</Button>
            </Grid>
            <DeveloperDashboardCards />
            </div>
            </div>
   )}
 </Spring>
        
        </div>
    )


}


export default DeveloperDashboard;