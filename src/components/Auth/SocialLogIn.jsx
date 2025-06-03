import React from 'react';
import facebook from '../../resources/images/icons/fb.png';
import google from '../../resources/images/icons/google.png';
import { Button, Form } from 'react-bootstrap';
import { fbLogIn, googleLogIn } from './authManager';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slice/authSlice';
import { useLocation, useNavigate } from 'react-router';

const SocialLogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname||'/';
  const dispatch = useDispatch();


  const handleGoogleLogIn = ()=>{
    googleLogIn()
    .then(res=>{
        dispatch(setUser(res));
        navigate(from)
    })
  }
  const handleFBLogIn = ()=>{
    fbLogIn()
    .then(res=>{
        dispatch(setUser(res));
        navigate(from)
    })
  }

  return (
    <div>
        <div className='d-flex flex-column align-items-center mt-3' > 
            <Button  
                variant="outline-secondary" 
                type='submit' 
                className=" rounded-pill mb-3 text-dark " 
                style={{width:'300px'}} 
                onClick={handleFBLogIn}>
            <img src={facebook} style={{ width:'25px', height:'auto'}} className='me-2' />
            Continue With Facebook
            </Button> 
            <Button  
                variant="outline-secondary" 
                type='submit' 
                className=" rounded-pill mb-3 text-dark " 
                style={{width:'300px'}} 
                onClick={handleGoogleLogIn}>
            <img src={google} style={{ width:'25px', height:'auto'}} className='me-2' />
            Continue With Google
            </Button> 
        </div>
    </div>
    );
};

export default SocialLogIn;