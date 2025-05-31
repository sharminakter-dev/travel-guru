import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';

const Login = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  console.log(watch("email")); // watch input value by passing the name of it
  console.log(watch("rememberMe")); // watch input value by passing the name of it

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
    </div>
    );
};

export default Login;

