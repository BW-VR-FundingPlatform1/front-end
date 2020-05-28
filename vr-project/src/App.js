import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import NavAppBar from './components/NavAppBar';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import BackerLogin from './components/BackerLogin';
import DeveloperLogin from './components/DeveloperLogin';
import BackerSignup from './components/BackerSignup'
import DeveloperSignup from './components/DeveloperSignup';
import BackerDashboard from './components/BackerDashboard';
import DeveloperDashboard from './components/DeveloperDashboard';


function App() {

  const [displayName, setDisplayName] = useState({
    username: "Login",
    route: "/login"
  }
  )

  const changeDisplayName = person => {
    const newName = {
      username: person.username,
      route: "/dashboard",
    }
    setDisplayName(newName)
  }

  const resetDisplayName = () => {
    setDisplayName({
      username: "Login",
      route: "/login"
    })
  }


  return (
    <div>
      <NavAppBar displayName={displayName} />
    
      <Route exact path="/">
      <HomePage />
      </Route>

      <Route path="/login">
        <LoginPage changeDisplayName={changeDisplayName} />
      </Route>

      <Route path="/backer-login">
        <BackerLogin changeDisplayName={changeDisplayName} />
      </Route>

      <Route path="/developer-login">
        <DeveloperLogin changeDisplayName={changeDisplayName} />
      </Route>

      <Route path="/backer-signup">
        <BackerSignup changeDisplayName={changeDisplayName} />
      </Route>

      <Route path="/developer-signup">
        <DeveloperSignup changeDisplayName={changeDisplayName} />
      </Route>

      <Route path="/backer-dashboard">
        <BackerDashboard resetDisplayName={resetDisplayName} />
      </Route>

      <Route path="/developer-dashboard">
        <DeveloperDashboard resetDisplayName={resetDisplayName} />
      </Route>

    </div>
  );
}

export default App;
