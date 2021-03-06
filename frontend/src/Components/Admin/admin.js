import React,{useState , useEffect} from 'react';
import Axios from 'axios'
import Navbar from '../Profile/Navbar/Navbar'

 const Admin=()=> {
    const [messages , setMessages]=useState([])
    const [status , setNewStatus]=useState('')

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

    const deleteMessage=(message_id)=>{
        Axios.delete(`http://localhost:3000/dashboard/${message_id}`).then((responce)=>{
            console.log(responce.data)
            getAllComplaint()

        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const updateStatus=(message_id)=>{
        Axios.put(`http://localhost:3000/update` , {status:status , message_id:message_id}).then((responce)=>{
          console.log(responce.data)
          getAllComplaint()
        })
        .catch((err)=>{
            console.log(err)
        })
    }
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
    <button className='btn btn-primary' onClick={()=> deleteMessage(value.message_id) } >Cancel</button> ||  { }
    <label> The status is: </label> <input type='text' onChange={(event)=>{
        setNewStatus(event.target.value)
    }}/>  <button className='btn btn-primary' onClick={()=>updateStatus(value.message_id)}>Update status</button>
    <div> <p> The status is: {value.status} </p> </div>
    
  </div>
</div>
               </div>  
            })}
        </div>
    )
}
export default Admin
