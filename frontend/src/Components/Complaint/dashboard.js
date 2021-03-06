import React from 'react';
import {useState} from 'react';
import Axios from 'axios';
import swal from 'sweetalert';
import Navbar from '../Navbar/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css'

 const Dashboard=()=> {
     const [message_name , setFullName]=useState("")
     const [message_subject , setSubject]=useState("")
     const [Phone , setPhone]=useState(0)
     const [message , setMessage]=useState("")

     const addNewMessage=()=>{
         if(message_name===''|| message_subject===''|| message==='' || Phone===''){
            swal({
                icon:'error',
                title:'oops',
                text:'All field is requierd ',
                timer:1500,
            })
            return;
         }
         const obj={message_name , message_subject , Phone, message}
         Axios.post('http://localhost:3000/dashboard' ,obj ).then((responce)=>{
             console.log(responce.data)
             swal({
                position: 'top-end',
                icon: 'success',
                title: ' Thanks for your message. We will contact you very soon ',
                timer: 2500
              })
             
         })
         .catch((err)=>{
             console.log('The err:',err)
         })
     }
    return (
        <div className='container'>
            <Navbar/>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className='group'>
                        <h2 className='header'> A Coustmer complaint </h2>
                    <form className='item'>
                        <label className='form-label'>Full Name</label><input type='text' className='form-control' placeholder='Enter your Full Name' onChange={(event)=>{
                            setFullName(event.target.value)
                        }}/>
                        <label className='form-label'>subject</label><input type='text' className='form-control' placeholder='Enter the subject' onChange={(event)=>{
                            setSubject(event.target.value)
                        }}/>
                        <label className='form-label'> Mobile phone</label><input type='number' className='form-control' placeholder='Enter your mobile phone' onChange={(event)=>{
                            setPhone(event.target.value)
                        }}/>
                        <label className='form-label'>Message</label><textarea ty className='form-control valid' onChange={(event)=>{
                            setMessage(event.target.value)
                        }}>Write your complaint here....</textarea>
                        <center>
                        <button type='button' className='btn btn-primary lg' onClick={()=>addNewMessage()}>Send</button>
                        </center>
                        
                    </form>
                    
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Dashboard;
