import React from 'react';
import {useState} from 'react';
import Axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';
import { BrowserRouter as Router, Route , Link , useHistory} from 'react-router-dom';
import './Login.css'

 const Login=()=> {
     const history=useHistory()
     const [email , setemail]=useState('')
     const [password,setpassword]=useState('')
     const addLogin=()=>{
         if(email.length<3 || password.length<3 ){
            swal({
                icon:'error',
                title:'oops',
                text:'Enter your Email and password',
                timer:1500,
            })
         }
         Axios.post('http://localhost:3000/',{email:email , password:password}).then((data)=>{
             if(data.data){
                  history.push('/dashboard')
             }else{
                 console.log('plz enter your email and passowrd')
             }
            
         })
     }
    return (

<div className='container bg'>
            <div className='row justify-content-center'>
                <div className='col-12 col-sm-6 col-md-3'>
                
                    <form className='form-container'>
             <div className='form-group'>
             <h2 className='header'>Login</h2>
             <label  className="form-label">Email address</label>
    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder='Enter your email adress' onChange={(event)=>{
        setemail(event.target.value)
    }}/>

             </div>
             <div className="mb-3">
    <label className="form-label">Password</label>
    <input type="password" className="form-control" placeholder='Enter your password' onChange={(event)=>{
        setpassword(event.target.value)
    }}/>
  </div>
  <button type="button" className="btn btn-primary btn-block" onClick={()=>addLogin()} >Submit</button>

     <div className='link'><Link to='/signup' > Create new account? </Link></div> 
         </form>

                </div>
            </div>
            
        </div>
    
    )
    }
export default Login;

