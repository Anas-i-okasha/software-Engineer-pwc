import React,{useState , useEffect} from 'react';
import Axios from 'axios'
import Navbar from '../Profile/Navbar/Navbar'

 const Admin=()=> {
    const [messages , setMessages]=useState([])

    const getAllComplaint=()=>{
        Axios.get('http://localhost:3000/admin').then((responce)=>{
            console.log(responce)
            setMessages(responce.data)
        })
        .catch((err)=>{
            console.log(err)

        })
    }
    useEffect(()=>{
        getAllComplaint()
    },[])
    return (
        <div>
            <Navbar/>
            {messages.map((value)=>{
               return <div className='container'>
                   <div className="card" >
  
  <div className="card-header"> 
    <h4 className="card-title justify-content-center">Complaint Title:{value.message_subject} </h4>
    <h4 className='card-title'> Customer Name: {value.message_name} </h4>
    <p className="card-text"> Mobile Phone: {value.Phone} </p>
    -----------------------------------------
    <h5 className='card-text'> {value.message} </h5>
    <button className='btn btn-primary' >Cancel</button>  { }
    <button type='button' className='btn btn-primary'> Pending </button>
  </div>
</div>
               </div>  
            })}
                
             
            
        </div>
    )
}
export default Admin
