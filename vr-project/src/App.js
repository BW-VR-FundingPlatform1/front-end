import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import NavAppBar from './components/NavAppBar';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';
import BackerLogin from './components/BackerLogin';
import DeveloperLogin from './components/DeveloperLogin';
import BackerSignup from './components/BackerSignup'
import DeveloperSignup from './components/DeveloperSignup';

function App() {
  return (
    <div>
      <NavAppBar />
      
      <Route exact path="/">
      <HomePage />
      </Route>

      <Route path="/login">
        <LoginPage />
      </Route>

      <Route path="/backer-login">
        <BackerLogin />
      </Route>

      <Route path="/developer-login">
        <DeveloperLogin />
      </Route>

      <Route path="/backer-signup">
        <BackerSignup />
      </Route>

      <Route path="/developer-signup">
        <DeveloperSignup />
      </Route>

    </div>
  );
}

export default App;
