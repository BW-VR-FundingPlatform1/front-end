import React from 'react';
import { Spring } from 'react-spring/renderprops';

import DeveloperSignupForm from './DeveloperSignupForm';

const DeveloperSignup = () => {
    return(
        <div>
            <Spring
        config={{duration: 2000}}
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        >
          {props=>(
           <div style={props}>
            <div className="developerSignup-image">
                <div>
                    <DeveloperSignupForm />
                </div>
            </div>
            </div>
   )}
 </Spring>

        </div>
    )
}

export default DeveloperSignup;
