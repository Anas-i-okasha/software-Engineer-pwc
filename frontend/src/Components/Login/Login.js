import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';
import './Login.css'

 function Login() {
    return (

<div className='container bg'>
            <div className='row justify-content-center'>
                <div className='col-12 col-sm-6 col-md-3'>
                
                    <form className='form-container'>
             <div className='form-group'>
             <h2 className='header'>Login</h2>
             <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your email adress'/>

             </div>
             <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter your password'/>
  </div>
  <button type="submit" class="btn btn-primary btn-block" >Submit</button>

     <div className='link'><Link to='/signup' > You did't have account yet! </Link></div> 
         </form>

                </div>
            </div>
            
        </div>
    
    )
    }
export default Login;

