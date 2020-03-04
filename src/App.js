import React from 'react';
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import Router from './Router'
import store from './redux/store'

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <NavBar />
    <Router />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
