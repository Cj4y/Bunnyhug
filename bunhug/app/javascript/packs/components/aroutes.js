import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Listings from './components/ListingDisplay';z
import About from './components/About';z
import Contact from './components/Contact';
import Error from './components/Error';
import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/listings" component={Listings}/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}
 
export default App;