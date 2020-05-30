import React from 'react'

import { Spring } from 'react-spring/renderprops';

import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import DeveloperDashboardCards from './DeveloperDashboardCards';
import CreateProject from './CreateProject';



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
                <CreateProject />
            <Grid container display="flex" justify="flex-end">
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