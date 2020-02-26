import React from 'react';
import './App.css';
import NavBarLogin from './components/NavBarLogin'
import Login from './components/Login';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Router from './Router'


function App() {
  return (
    <BrowserRouter>
    <NavBarLogin />
    <Login />
    <Router />
    </BrowserRouter>
  );
}

export default App;
