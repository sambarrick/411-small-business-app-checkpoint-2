import React from 'react';
import './App.css';
import NavBarLogin from './components/NavBar'
import Login from './components/Login';


function App() {
  return (
    <div className="App">
      <NavBarLogin />
        <Login />
    </div>
  );
}

export default App;
