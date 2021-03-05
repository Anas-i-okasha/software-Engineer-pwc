import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './dashboard.css'

 function dashboard() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className='group'>
                        <h2 className='header'> A Coustmer complaint </h2>
                    <form className='item'>
                        <label className='form-label'>Full Name</label><input type='text' className='form-control' placeholder='Enter your Full Name'/>
                        <label className='form-label'>Email Adress</label><input type='text' className='form-control' placeholder='Enter your Email Adress'/>
                        <label className='form-label'> Mobile phone</label><input type='number' className='form-control' placeholder='Enter your mobile phone'/>
                        <label className='form-label'>Message</label><textarea ty className='form-control valid'>Write your complaint here....</textarea>
                        <center>
                        <button type='button' className='btn btn-primary lg'>Send</button>
                        </center>
                        
                    </form>
                    
                    </div>
                    
                    

                </div>
            </div>
            
        </div>
    )
}
export default dashboard;
