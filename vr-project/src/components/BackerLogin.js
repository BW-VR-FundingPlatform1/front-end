import React from 'react';
import { Spring } from 'react-spring/renderprops';

const BackerLogin = () => {
    return(
        <div>
            <Spring
        config={{duration: 440}}
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        >
          {props=>(
           <div style={props}>
            <div className="backerLogin-image">
                <div>
                </div>
            </div>
            </div>
   )}
 </Spring>

        </div>
    )
}

export default BackerLogin;
