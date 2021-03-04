import React from 'react';
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';

 function signup() {
    return (
        <div>
            <div>
                <h2>Signup</h2>
            </div>
            <div>
                <label>Name</label><input type='text' placeholder='Enter your name '/>
                <label>Email</label> <input type='text' placeholder='Enter your email'/>
                <label>Password</label><input type='text' placeholder='Enter your password'/>
                <button>Signup</button>
                <Link to='/'>You already have account?</Link>
                
            </div>
        </div>
    )
}
export default signup;
