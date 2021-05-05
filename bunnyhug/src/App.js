
//import react hook
import React, { useEffect } from 'react';
import {Switch, Route} from 'react-router-dom';
//use dispatch to access user state
import { useDispatch } from 'react-redux';
import { checkUserSession } from './redux/User/user.actions';
//import Directory from './components/Directory/Directory';

// higher order component to
import WithAuth from './highOrderComponent/withAuth';
import WithAdminAuth from './highOrderComponent/withAdminAuth';

//import components
import Homepage from './Pages/Homepage/Homepage'
import Register from './Pages/Register/Register'
import Login from './Pages/Login/Login'
import Signin from './components/Signin/Signin'
import RecoverAccount from './Pages/RecoverAccount/RecoverAccount';
import Search from './Pages/Search/Search';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Dashboard from './Pages/Dashboard/Dashboard';
import Admin from './Pages/Admin/Admin';
import Cart from './Pages/Cart/Cart';
import Payment from './Pages/Payment/Payment';
import Order from './Pages/Order/Order';


//import layouts
import AdminLayout from './layouts/AdminLayout';
import DashboardLayout from './layouts/DashboardLayout';
import MainLayout from './layouts/MainLayout';
import HomepageLayout from './layouts/HomepageLayout'

import './default.scss';

const App = props => {

  //
  const dispatch = useDispatch();

  //check state of the current user
  useEffect(() => {
    dispatch(checkUserSession());

  }, []);

  return (
    // use react-router to link page paths in browser and render expected components
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
        <Route path="/recover-account" render={() => (
          <MainLayout>
            <RecoverAccount />
          </MainLayout>
        )} />
        <Route path="/payment" render={() => (
          <WithAuth>
            <MainLayout>
              {/* <Payment /> */}
            </MainLayout>
          </WithAuth>
        )} />
        <Route path="/dashboard" render={() => (
          <WithAuth>
            <DashboardLayout>
              <Dashboard />
            </DashboardLayout>
          </WithAuth>
        )} />
        <Route path="/order/:orderID" render={() => (
          <WithAuth>
            <DashboardLayout>
              <Order />
            </DashboardLayout>
          </WithAuth>
        )} />
        <Route path="/admin" render={() => (
          <WithAdminAuth>
            <AdminLayout>
              <Admin />
            </AdminLayout>
          </WithAdminAuth>
        )} />
        <Route exact path="/search" render={() => (
          <MainLayout>
            <Search />
          </MainLayout>
        )} />
        {/* dynamically apply the filter name as :filterType */}
        <Route path="/search/:filterType" render={() => (
          <MainLayout>
            <Search />
          </MainLayout>
        )} />
        <Route path="/product/:productID" render={() => (
          <MainLayout>
            <ProductDetails />
          </MainLayout>
        )} />
      </Switch>
    </div>
  );
}

export default App;
