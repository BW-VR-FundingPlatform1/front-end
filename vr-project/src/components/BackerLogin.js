import React from 'react';
import { Spring } from 'react-spring/renderprops';

import BackerLoginForm from './BackerLoginForm';

const BackerLogin = () => {
    return(
        <div>
            <Spring
        config={{duration: 2000}}
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        >
          {props=>(
           <div style={props}>
            <div className="backerLogin-image">
                <div>
                    <BackerLoginForm />
                </div>
            </div>
            </div>
   )}
 </Spring>

        </div>
    )
}

export default BackerLogin;
