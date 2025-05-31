import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';


const Register = () => {
   const { register, handleSubmit, watch, formState: { errors } } = useForm();
     const onSubmit = data => console.log(data);
   
     console.log(watch("email")); // watch input value by passing the name of it
   
     return (
       <div style={{marginTop:'20px'}} >
   
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
             {...register("password", { required: true })} />
           {errors.password && <span className='text-danger'>Password field is required</span>}

           <Form.Control 
             type="password" 
             placeholder="Confirm Password"  
             className=' border-0 border-bottom mb-3'
             {...register("confirmPassword", { required: true })} />
           {errors.confirmPassword && <span className='text-danger'>Confirm Password field is required</span>}

           <Button variant="warning" type='submit' className="w-100 mb-3">Create an account</Button> 
           <div className="text-center">
                <small>
                    Already have an account? <Link to="/login" className="text-warning">login</Link>
                </small>
            </div> 
            
         </Form>
       </div>
       );
};

export default Register;