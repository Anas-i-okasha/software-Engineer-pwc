import React from 'react';
import {useState} from 'react';
import Axios from 'axios';
import swal from 'sweetalert';
import { BrowserRouter as Router, Route , Link , useHistory} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Login/Login.css'


 const Signup=()=> {
    const history = useHistory()
    const [user_name , setname] = useState('')
    const [email , setemail] = useState('')
    const [password , setpassword]=useState('')

    const addUser=()=>{
        if(!user_name || !email || !password){
            swal({
                icon:'error',
                title:'oops',
                text:'Enter your information!',
                timer:1500,
            })
            console.log('Enter valid information')
            return 
          }
          Axios.post('http://localhost:3000/signup' , {user_name:user_name , email:email , password:password})
          .then((responce)=>{
           if(responce.data === 'Thank you for create your account'){   
               history.push('/')
               swal({
                position: 'top-end',
                icon: 'success',
                title: 'create acount Successfully',
                timer: 1500
              })

               }else{
                   console.log('Plz enter valid information')
               }
          })
          .catch((err)=>{
           console.log(err)
          })
        
    }
    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-12 col-sm-6 col-md-3'>
                <form className='form-container'>
                    <h2 className='header'>Sign up</h2>
  <div className="mb-3">
    <label  className="form-label">Full Name</label>
    <input type="text" className="form-control" aria-describedby="emailHelp" placeholder='Enter your full name' onChange={(event)=>{
        setname(event.target.value)
    }} />
    
  </div>
  <div className="mb-3">
    <label  className="form-label">Email Adress</label>
    <input type="email" className="form-control"  placeholder='Enter your email adress' onChange={(event)=>{
        setemail(event.target.value)
    }}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">password</label>
    <input type="password" className="form-control" placeholder='Enter your password' onChange={(event)=>{
        setpassword(event.target.value)
    }}  />
  </div>

  <button type="button" className="btn btn-primary btn-block" onClick={()=>addUser()}>Submit</button>
     
     <div className='link'>  <Link to='/' > You already have an account?   </Link>  </div>   
</form>
                </div>
            </div>

        </div>
    )
}
export default Signup;
