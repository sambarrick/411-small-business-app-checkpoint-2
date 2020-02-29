import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import Login from './components/Login';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Router from './Router'


function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Router />
    </BrowserRouter>
  );
}

export default App;
