import React from 'react';
import { Spring } from 'react-spring/renderprops';

import DeveloperLoginForm from './DeveloperLoginForm';

const DeveloperLogin = (props) => {


    return(
        <div>
            <Spring
        config={{duration: 650}}
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        >
          {springProps=>(
           <div style={springProps}>
            <div className="developerLogin-image">
                <div>
                    <DeveloperLoginForm DeveloperDisplayName={props} />
                </div>
            </div>
            </div>
   )}
 </Spring>

        </div>
    )
}

export default DeveloperLogin;
