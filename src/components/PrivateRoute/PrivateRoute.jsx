import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router';
import Login from '../Auth/Login';
import Auth from '../Auth/Auth';
import Header from '../Header/Header';

const PrivateRoute = ({children}) => {
    const isAuthenticated = useSelector(state=>state.auth.user.success);
    const location = useLocation();
    return (
        <div>
            <Header/>
            {isAuthenticated?
              children:
              <Navigate to='/login' state={{from:location}} />
            }
        </div>
    );
};

export default PrivateRoute;