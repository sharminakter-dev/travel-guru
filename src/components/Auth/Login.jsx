import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';
import facebook from '../../resources/images/icons/fb.png';
import google from '../../resources/images/icons/google.png';
import { loginUser } from './authManager'; 
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slice/authSlice';

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const onSubmit = data => {
    loginUser(data.email, data.password)
    .then(res=>{
      dispatch(setUser(res));
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
            <small><Link className='text-warning'>Forgot password</Link></small>
        </div>
        {errors.exampleRequired && <span>This field is required</span>}
        <Button variant="warning" type='submit' className="w-100 mb-3">Login</Button> 
        <small>Don't have an account? <Link to='/register' className='text-warning' >Create an account</Link> </small> 
      </Form>
      <div className='d-flex flex-column align-items-center mt-3' > 
                 <Button  variant="outline-secondary" type='submit' className=" rounded-pill mb-3 text-dark " style={{width:'300px'}} >
                  <img src={facebook} style={{ width:'25px', height:'auto'}} className='me-2' />
                  Continue With Facebook
                  </Button> 
                 <Button  variant="outline-secondary" type='submit' className=" rounded-pill mb-3 text-dark " style={{width:'300px'}} >
                   <img src={google} style={{ width:'25px', height:'auto'}} className='me-2' />
                  Continue With Google
                  </Button> 
              </div>
    </div>
    );
};

export default Login;

