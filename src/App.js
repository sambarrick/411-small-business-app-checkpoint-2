import React from 'react';
import './App.css';
import NavBarLogin from './components/NavBarLogin'
import Login from './components/Login';
import NavBarLoggedIn from './components/NavBarLoggedIn'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Router from './Router'
import ListingsNotLoggedIn from './components/ListingsNotLoggedIn'
import ListingsLoggedIn from './components/ListingsLoggedIn'

function App() {
  return (
    <div>
    {/*<Provider>
   <BrowserRouter>*/}
    <NavBarLoggedIn />
    <Login />
    <ListingsNotLoggedIn />
    <ListingsLoggedIn />
    {/*  //<Router />
</BrowserRouter>
    </Provider>
    */}
  </div>

  );
}

export default App;
