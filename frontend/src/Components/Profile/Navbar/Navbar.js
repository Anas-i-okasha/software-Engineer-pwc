import React from 'react'
import { BrowserRouter as Router, Route  , Link} from 'react-router-dom';
import './Navbar.css'

  const Navbar=()=> {
    
        return (
            <div className='container-fluid'>
          <nav className="navbar ">
                <h2 >Complaints survey</h2>
              
    <Link to='/' className='nav-link' ><span className=" glyphicon glyphicon-log-in"></span> Sign Out </Link>
    
              </nav>
              </div>
        )
}

export default Navbar;