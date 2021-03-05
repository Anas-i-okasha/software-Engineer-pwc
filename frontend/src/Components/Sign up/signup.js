import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Login/Login.css'
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';

 function signup() {
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-12 col-sm-6 col-md-3'>
                <form className='form-container'>
                    <h2 className='header'>Sign up</h2>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Full Name</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your full name'/>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email Adress</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter your email adress'/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder='Enter your email adress' placeholder='Enter your password'/>
  </div>

  <button type="submit" class="btn btn-primary btn-block">Submit</button>
     
     <div className='link'>   <Link to='/' > You already have account??   </Link>  </div>   
</form>
                </div>
            </div>

        </div>
    )
}
export default signup;
