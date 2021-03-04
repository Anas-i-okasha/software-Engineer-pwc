import React from 'react';
import { BrowserRouter as Router, Route , Link } from 'react-router-dom';
import Login from './Components/Login/Login'
import signup from './Components/Sign up/signup'
import dashboard from './Components/Complaint/dashboard'

import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route path='/' exact component={Login}/>
        <Route path='/signup' exact component={signup}/>
        <Route path='/dashboard' exact component={dashboard}/>
      </div>
    </Router>
  );
}

export default App;


