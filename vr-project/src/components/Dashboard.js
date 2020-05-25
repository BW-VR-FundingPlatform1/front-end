import React from 'react'

import { useHistory } from 'react-router-dom';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import DashboardCards from './DashboardCards';



const Dashboard = (props) => {

let history = useHistory();

const signoutButton = () => {
    return history.push("/");
    
}


    return(
        <div className="dashboard-image">
            <Grid container display="flex" justify="flex-end">
            <Button onClick={() => {props.resetDisplayName(); signoutButton()}} style={{paddingRight: "2%"}}>Sign Out</Button>
            </Grid>
            <DashboardCards />
        </div>
    )


}


export default Dashboard;