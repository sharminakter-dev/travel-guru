import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router';
import facebook from '../../resources/images/icons/fb.png';
import google from '../../resources/images/icons/google.png';
import { createNewUser } from './authManager'; 
import {setUser} from '../../redux/slice/authSlice';
import { useSelector } from 'react-redux';


const Register = () => {
  const dispatch = useDispatch();
  const user = useSelector(state=>state.auth.user);
  // console.log(user);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => {
    // new user registration
    createNewUser(data.fName, data.lName ,data.email, data.password)
    .then((user) =>{
      dispatch(setUser(user))
    })
  };
   
  //  console.log(watch("password")); // watch input value by passing the name of it

  const validatePassword = (value) => {
    if (value.length < 6) {
      return "Password must be at least 6 characters long";
    }
    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /\d/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);  
    if (!hasUpperCase || !hasLowerCase || !hasNumber || !hasSpecialChar) {
      return "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character";
    }
  }

  const validateConfirmPassword = (value)=>{
    if(value !== watch('password')){
      return "Passwords do not match";
    } 
  }
  
  return (
    <div style={{marginTop:'20px'}} className="text-center" >

      <Form className=' border border-dark w-25 text m-auto p-3' onSubmit={handleSubmit(onSubmit)} >
        <h5 className='text-center mb-5' >Create an account</h5>

          <Form.Control 
          type="text" 
          placeholder="First Name" 
          className=' border-0 border-bottom mb-3'
          {...register("fName", { required: true })} />
        {errors.fName && <span  className='text-danger'>First Name field is required</span>}

        <Form.Control 
          type="text" 
          placeholder="Last Name" 
          className=' border-0 border-bottom mb-3'
          {...register("lName", { required: true })} />
        {errors.lName && <span  className='text-danger'>Last Name field is required</span>}

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
          {...register("password", { required: "Password field is required" , validate: validatePassword })} />
        {errors.password && <span className='text-danger'>{errors.password.message}</span>}

        <Form.Control 
          type="password" 
          placeholder="Confirm Password"  
          className=' border-0 border-bottom mb-3'
          {...register("confirmPassword", { required: 'Confirm Password field is required', validate: validateConfirmPassword })} />
        {errors.confirmPassword && <span className='text-danger'>{errors.confirmPassword.message}</span>}

        <Button variant="warning" type='submit' className="w-100 mb-3">Create an account</Button> 
        <div className="text-center">
            <small>
                Already have an account? <Link to="/login" className="text-warning mb-3">login</Link>
            </small>
        </div> 
        
      </Form>
        {user.error && <span className='text-danger'>{user.error}</span>}
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

export default Register;