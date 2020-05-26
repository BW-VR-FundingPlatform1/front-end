import React from 'react';
import { Spring } from 'react-spring/renderprops';

import BackerSignupForm from './BackerSignupForm';

const BackerSignup = (props) => {
    return(
        <div>
            <Spring
        config={{duration: 1000}}
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        >
          {springProps=>(
           <div style={springProps}>
            <div className="backerSignup-image">
                <div>
                    <BackerSignupForm changeDisplayName={props} />
                </div>
            </div>
            </div>
   )}
 </Spring>

        </div>
    )
}

export default BackerSignup;
