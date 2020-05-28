import React from 'react'
import { Spring } from 'react-spring/renderprops';
import Grid from '@material-ui/core/Grid';
import PublicProjectsCards from './PublicProjectsCards';

const PublicProjects = (props) => {

    return(
        <div>
             <Spring
        config={{duration: 650}}
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        >
          {springProps=>(
           <div style={springProps}>
               <div className="public-projects-image">
            <Grid container display="flex" justify="flex-end" style={{paddingTop: "4%"}}>
      
            </Grid>
            <PublicProjectsCards />
            </div>
            </div>
             )}
            </Spring>
        </div>
    )
}


export default PublicProjects;