import React, { useState } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import NavAppBar from './components/NavAppBar';
import HomePage from './components/home/HomePage';
import LoginPage from './components/login/LoginPage';
import BackerLogin from './components/backer/BackerLogin';
import DeveloperLogin from './components/developer/DeveloperLogin';
import BackerSignup from './components/backer/BackerSignup'
import DeveloperSignup from './components/developer/DeveloperSignup';
import PrivateRoute from './utils/privateRoute';
import BackerDashboard from './components/backer/BackerDashboard';
import DeveloperDashboard from './components/developer/DeveloperDashboard';
import PublicProjects from './components/PublicProjects';
import CreateProject from './components/CreateProject';

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
      {/* <PrivateRoute path="/backer-dashboard/:id/new-project" component={CreateProject} /> */}

      <Route path="/new-project">
        <CreateProject />
      </Route>

      


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
