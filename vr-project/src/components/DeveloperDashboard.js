import React from 'react'

import { Spring } from 'react-spring/renderprops';

import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import DashboardCards from './DashboardCards';



const DeveloperDashboard = (props) => {

let history = useHistory();

const signoutButton = () => {
    return history.push("/");
    
}


    return(
        <div>
        
             <Spring
        config={{duration: 1500}}
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        >
          {springProps=>(
           <div style={springProps}>
               <div className="developer-dashboard-image">
            <Grid container display="flex" justify="flex-end">
            <Button onClick={() => {props.resetDisplayName(); signoutButton()}} style={{paddingRight: "2%"}}>Sign Out</Button>
            </Grid>
            <DashboardCards />
            </div>
            </div>
   )}
 </Spring>
        
        </div>
    )


}


export default DeveloperDashboard;