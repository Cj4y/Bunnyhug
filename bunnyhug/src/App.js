// import logo from './logo.svg';

import React from 'react';
import ReactDOM from 'react-dom';
import Directory from './components/Directory/Directory';
import Header from './components/Header/Header'
import Homepage from './components/Pages/Homepage/Homepage'
import './default.scss';
function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage />
    </div>
  );
}

export default App;
