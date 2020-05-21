import React from 'react';
import { Spring } from 'react-spring/renderprops';

import LoginPageCards from './LoginPageCards';



const LoginPage = () => {

    return(
        <Spring
        config={{duration: 1000}}
        from={{ opacity: 0}}
        to={{ opacity: 1}}
        >
          {props=>(
           <div style={props}>
        <div className="loginPage">
            <div className="loginPage-sub">
           
            
            <LoginPageCards />
          
            </div>
        </div>
        </div>
   )}
 </Spring>
    )
}

export default LoginPage;