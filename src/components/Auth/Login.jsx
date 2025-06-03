import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router';
import { loginUser, resetPassword } from './authManager'; 
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/slice/authSlice';

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();
  const user = useSelector(state=>state.auth.user);
  const emailRef = useRef();
  const [msg, setMsg] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from.pathname||'/';

  const onSubmit = data => {
    loginUser(data.email, data.password, data.rememberMe)
    .then(res=>{
      dispatch(setUser(res));
      reset();
      navigate(from);
    })
  };

  // console.log(watch("email")); // watch input value by passing the name of it
  // console.log(watch("rememberMe")); // watch input value by passing the name of it

  return (
    <div style={{marginTop:'20px'}} >

      <Form className=' border border-dark w-25 text m-auto p-3' onSubmit={handleSubmit(onSubmit)} >
        <h5 className='text-center mb-5' >Login</h5>
        <Form.Control 
          type="email" 
          placeholder="Username or Email" 
          className=' border-0 border-bottom mb-3'
          ref={emailRef}
          {...register("email", { required: true })} />
        {errors.email && <span  className='text-danger'>Email field is required</span>}

        <Form.Control 
          type="password" 
          placeholder="Password"  
          className=' border-0 border-bottom mb-3'
          {...register("password", { required: true })} />
        {errors.password && <span className='text-danger'>Password field is required</span>}

        <div className='d-flex justify-content-between'>
            <Form.Check 
              type="checkbox" 
              label="Remember me" 
              className='mb-3' 
              {...register("rememberMe")} />
            <small>
              <button 
                className='text-warning border-0 bg-white text-decoration-underline'
                onClick={()=>{
                  if(watch("email")){
                    resetPassword(watch("email"));
                    setMsg('We have sent you an email to reset your password')
                  }else{
                    emailRef.current.focus();
                    setMsg(null);
                  }
                }}>
                  Forgot password
              </button>
            </small>
        </div>
        {errors.exampleRequired && <span>This field is required</span>}
        <Button variant="warning" type='submit' className="w-100 mb-3">Login</Button> 
        <small>Don't have an account? <Link to='/register' className='text-warning' >Create an account</Link> </small> 
      </Form>
      {msg && 
       <p className='text-center text-success mt-2' >{msg}</p>
      }
      {
        user.error && 
        <p className='text-danger text-center mt-2' > {user.error} </p>
      }

    </div>
    );
};

export default Login;

