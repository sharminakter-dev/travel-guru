import React from 'react';
import Header from '../Header/Header';
import Login from './Login';
import Register from './Register';
import NotFound from '../NotFound/NotFound';
import SocialLogIn from './SocialLogIn';


const Auth = ({type}) => {
    return (
        <div>
            <Header/>
            {type === "login" ? 
                <>
                    <Login/>
                    <SocialLogIn/>
                    
                </>
            : type === "register"?
                <>
                    <Register/>
                    <SocialLogIn/>
                </>
            :<NotFound/>}
        </div>
    );
};

export default Auth;