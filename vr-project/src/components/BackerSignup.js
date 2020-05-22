import React from 'react';
import { Spring } from 'react-spring/renderprops';

import BackerSignupForm from './BackerSignupForm';

const BackerSignup = () => {
    return(
        <div>
            <Spring
        config={{duration: 2000}}
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        >
          {props=>(
           <div style={props}>
            <div className="backerSignup-image">
                <div>
                    <BackerSignupForm />
                </div>
            </div>
            </div>
   )}
 </Spring>

        </div>
    )
}

export default BackerSignup;
