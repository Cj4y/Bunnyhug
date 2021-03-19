import React, { Component } from 'react';
import { Route, HashRouter} from "react-router-dom";
import Home from '../components/Home';
import Listing from '../components/Listing';
import About from '../components/About';
import Contact from '../components/Contact';
import Error from '../components/Error';
//import Navigation from './Navigation';
 
class App extends Component {
  render() {
    return (      
       <HashRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" exact component={Home}/>
             <Route path="/listings" component={Listing}/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </HashRouter>
    );
  }
}
 
export default App;