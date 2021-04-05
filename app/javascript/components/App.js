import React from 'react'
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Login from './Auth/Login'
import Register from './Auth/Register'
import Forgot from './Auth/Password/Forgot'
import Reset from './Auth/Password/Reset'
import Listings from './Listings/Listings'
import Listing from './Listing/Listing'
import Cart from './Cart/Cart'
import Navbar from './Navbar'
import { AuthProvider } from './AuthContext'
//import ProtectedRoute from './ProtectedRoute'
import UnprotectedRoute from './UnprotectedRoute'

const App = () =>{
    return(
        <AuthProvider>
            <Navbar/>
            <Switch>
                <Route exact path="/" component={Listings} />
                <Route exact path="/listings/:slug" component={Listing} />
                <Route path="/cart" exact component={Cart} />
                <UnprotectedRoute path="/login" component={Login}/>
                <UnprotectedRoute exact path="/register" component={Register} />
                <UnprotectedRoute path="/forgot-password" component={Forgot}/>
                <UnprotectedRoute path="/reset-password" component={Reset}/>
            </Switch>
        </AuthProvider>
    )
}

export default App