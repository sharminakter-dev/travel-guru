import React from 'react';
import Header from '../Header/Header';
import Login from './Login';
import Register from './Register';
import NotFound from '../NotFound/NotFound';

const Auth = ({type}) => {
    return (
        <div>
            <Header/>
            {type === "login" ? 
                <Login/>
            : type === "register"?
                <Register/>
            :<NotFound/>}
        </div>
    );
};

export default Auth;