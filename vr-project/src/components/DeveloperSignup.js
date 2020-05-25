import React from 'react';
import { Spring } from 'react-spring/renderprops';

import DeveloperSignupForm from './DeveloperSignupForm';

const DeveloperSignup = (props) => {
    return(
        <div>
            <Spring
        config={{ duration: 1000 }}
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        >
          {springProps=>(
           <div style={springProps}>
            <div className="developerSignup-image">
                <div>
                    <DeveloperSignupForm changeDisplayName={props} />
                </div>
            </div>
            </div>
   )}
 </Spring>

        </div>
    )
}

export default DeveloperSignup;
