import React from 'react';
import { Spring } from 'react-spring/renderprops';

import CreateProjectForm from './CreateProjectForm';

const CreateProject = (props) => {


    return(
        <div>
            <Spring
        config={{duration: 650}}
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        >
          {springProps=>(
           <div style={springProps}>
            <div className="createProject-image">
                <div>
                    <CreateProjectForm DeveloperDisplayName={props} />
                </div>
            </div>
            </div>
   )}
 </Spring>

        </div>
    )
}

export default CreateProject;
