import React, { Fragment } from 'react'
import styled from 'styled-components'
import { Route, Link } from 'react-router-dom'
import { AuthConsumer } from './AuthContext'

const Wrapper = styled.nav`
  width: 100%;
  height: 65px;
  line-height: 65px;
  background-color: black;
  color: white;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`

const Container = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1300px;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Left = styled.div`
  flex-basis: auto;
  align-self: flex-start !important;
`

const Right = styled.div`
  flex-basis: 12%;
  align-self: flex-end !important;
  margin-right: 24px;

  a {
    color: #fff;
    text-decoration: none;
    cursor: pointer
  }
`

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding:0;
  margin:0;
  list-style-type: none;
`

const Logo = styled.span`
  font-family: 'Poppins-ExtraBold';
  font-weight: bold;
  font-size: 20px;

  a {
    font-size: inherit;
    font-weight: inherit;
    font-family: inherit;
    color: #fff;
    text-decoration: none;
  }
`

const Navbar = (props) => {
  return (
    <AuthConsumer>
      { ({ isAuth, logout }) => (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-5">
          <div className="container">
            <div className="nav-brand">
              <Link to="/">Bunnyhug</Link>
            </div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
              <ul className="navbar-nav">

                <li className="nav-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link to="/">My closet</Link>
                </li>
                <ul>
                {
                  isAuth ?
                  <Fragment>
                    <li className="nav-item"><Link to="/">Home</Link></li>
                    <li className="nav-item"><a onClick={logout} >Log Out</a></li>
                  </Fragment> :
                  <Fragment>
                    <li className="nav-item"><Link to="/login">Login</Link></li>
                    <li className="nav-item"><Link to="/register">Signup</Link></li>
                  </Fragment>
                }
                </ul>
              </ul>
            </div>
          </div>
        </nav>
      )}
      </AuthConsumer>
  )}
export default Navbar
