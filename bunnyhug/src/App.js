// import logo from './logo.svg';

import React, { useEffect } from 'react';
import {Switch, Route} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { checkUserSession } from './redux/User/user.actions';
import Directory from './components/Directory/Directory';

import Homepage from './components/Pages/Homepage/Homepage'
import Register from './components/Pages/Register/Register'
import Login from './components/Pages/Login/Login'
import Signin from './components/Signin'

import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout'

import './default.scss';
const App = props => {
  const dispatch = useDispatch();

  //check state of the current user
  useEffect(() => {
    dispatch(checkUserSession());

  }, []);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" render={() => (
            <HomepageLayout>
              <Homepage />
            </HomepageLayout>
          )}
        />
        <Route path="/register" render={() => (
            <HomepageLayout>
              <Register />
            </HomepageLayout>
          )}
        />
        <Route path="/login" render={() => (
            <HomepageLayout>
              <Login />
            </HomepageLayout>
          )}
        />
        <Route path="/signin" render={() => (
            <HomepageLayout>
              <Signin />
            </HomepageLayout>
          )}
        />
      </Switch>
    </div>
  );
}

export default App;
