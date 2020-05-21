import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import NavAppBar from './components/NavAppBar';
import HomePage from './components/HomePage';
import LoginPage from './components/LoginPage';

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

    </div>
  );
}

export default App;
