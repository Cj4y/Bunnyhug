// import logo from './logo.svg';

import React from 'react';
import {Route} from 'react-router-dom';
import Directory from './components/Directory/Directory';
import Header from './components/Header/Header'
import Homepage from './components/Pages/Homepage/Homepage'
import Register from './components/Pages/Register/Register'
import './default.scss';
function App() {
  return (
    <div className="App">
      <Header/>
      <Route path="/" exact component = {Homepage} />
      <Route path="/register" exact component = {Register} />
    </div>
  );
}

export default App;
