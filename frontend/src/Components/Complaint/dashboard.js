import React from 'react'

 function dashboard() {
    return (
        <div>
            <div>
                <h2>A coustmer Complaint</h2>
            </div>
            <div>
                <label>Name</label><input type='text' placeholder='Enter your name'/>
                <label>Email</label><input type='text' placeholder='Enter your email'/>
                <label>Phone number</label><input type='number' placeholder='Enter your phone number'/>
                <label>your Complaint</label><textarea/>
                <button>Send</button>

            </div>
        </div>
    )
}
export default dashboard;
