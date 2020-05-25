import React from 'react';
import { Spring } from 'react-spring/renderprops';

import BackerLoginForm from './BackerLoginForm';

const BackerLogin = (props) => {
    return(
        <div>
            <Spring
        config={{duration: 1000}}
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        >
          {springProps=>(
           <div style={springProps}>
            <div className="backerLogin-image">
                <div>
                    <BackerLoginForm changeDisplayName={props}/>
                </div>
            </div>
            </div>
   )}
 </Spring>

        </div>
    )
}

export default BackerLogin;
