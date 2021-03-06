import React from 'react';
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';
import Login from './Components/Login/Login'
import signup from './Components/Sign up/signup'
import dashboard from './Components/Complaint/dashboard'
import Admin from './Components/Admin/admin'
import Profile from './Components/Profile/Profile'

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route path='/' exact component={Login}/>
        <Route path='/signup' exact component={signup}/>
        <Route path='/dashboard' exact component={dashboard}/>
        <Route path='/admin' exact component={Admin}/>
        <Route path='/profile' exact component={Profile}/>
      </div>
    </Router>
  );
}

export default App;


