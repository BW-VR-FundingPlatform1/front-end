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
import PrivateRoute from './utils/privateRoute';
import BackerDashboard from './components/BackerDashboard';
import DeveloperDashboard from './components/DeveloperDashboard';
import PublicProjects from './components/PublicProjects';


function App() {

  const [displayName, setDisplayName] = useState({
    username: "Login",
    route: "/login"
  }
  )

  const DeveloperDisplayName = person => {
    const newName = {
      username: person.username,
      route: "/developer-dashboard",
    }
    setDisplayName(newName)
  }

  const BackerDisplayName = person => {
    const newName = {
      username: person.username,
      route: "/backer-dashboard",
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

      <Route path="/public-projects">
        <PublicProjects />
      </Route>

      <Route path="/login">
        <LoginPage />
      </Route>

      <Route path="/backer-login">
        <BackerLogin BackerDisplayName={BackerDisplayName} />
      </Route>

      <Route path="/developer-login">
        <DeveloperLogin DeveloperDisplayName={DeveloperDisplayName} />
      </Route>

      <Route path="/backer-signup">
        <BackerSignup />
      </Route>

      <Route path="/developer-signup">
        <DeveloperSignup />
      </Route>

      <PrivateRoute path="/developer-dashboard/:id" component={DeveloperDashboard} resetDisplayName={resetDisplayName} />
      <PrivateRoute path="/backer-dashboard/:id" component={BackerDashboard} resetDisplayName={resetDisplayName} />
      


      {/* <Route path="/backer-dashboard">
        <BackerDashboard resetDisplayName={resetDisplayName} />
      </Route>

      <Route path="/developer-dashboard">
        <DeveloperDashboard resetDisplayName={resetDisplayName} />
      </Route> */}
    </div>
  );
}

export default App;
