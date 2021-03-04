import React from 'react';
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';

 function Login() {
    return (
        <div>
            <div>
                <h2>Login</h2>
            </div>
            <label>Email</label><input type='text' placeholder='Enter your Email'/>
            <label>Password</label><input type='text' placeholder='Enter your password'/>
            <button>Login</button>
            <Link to='/signup'>You still don't have account yet!</Link>
            
        </div>
    )
}
export default Login;

