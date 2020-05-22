import React from 'react';
import { Spring } from 'react-spring/renderprops';

import DeveloperLoginForm from './DeveloperLoginForm';

const DeveloperLogin = () => {
    return(
        <div>
            <Spring
        config={{duration: 2000}}
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        >
          {props=>(
           <div style={props}>
            <div className="developerLogin-image">
                <div>
                    <DeveloperLoginForm />
                </div>
            </div>
            </div>
   )}
 </Spring>

        </div>
    )
}

export default DeveloperLogin;
