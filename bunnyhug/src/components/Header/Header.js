import React, { useState, useEffect } from 'react';
import { Link, useLocation  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUserStart } from './../../redux/User/user.actions';
import { selectCartItemsCount } from './../../redux/Cart/cart.selectors';
import './styles.scss';

import Logo from './../../assets/logo.png';

const mapState = (state) => ({
  currentUser: state.user.currentUser,
  totalNumCartItems: selectCartItemsCount(state)
});

//props to access current user information
const Header = props => {

    const [activeMenu, setActiveMenu] = useState(false);
    const dispatch = useDispatch();
    const { currentUser, totalNumCartItems } = useSelector(mapState);
    const location = useLocation();

    useEffect(() => {
        setActiveMenu(false);
    }, [location]);

    const signOut = () => {
      dispatch(signOutUserStart());
    };

    return (
        <header className="header">
            <div className="wrapper">
                <div className="logo">
                    <Link to="/">
                        <img src={logo} alt="Bunnyhug logo"/>
                    </Link>
                </div>

                <nav className={`mainMenu ${activeMenu ? 'active' : ''}`}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/search">Search</Link></li>
                    </ul>
                </nav>
                <div className="accountAction">
                    <ul>
                        <li>
                            <Link to="/cart"> Cart
                                {/* Cart ({totalNumCartItems}) */}
                                <i class="fas fa-shopping-basket"></i>
                            </Link>
                        </li>
                        {/* if there currently is a user signed in, show: */}
                        {currentUser && [
                            <li key={1}>
                                <Link to="/dashboard">
                                    My Account
                                    <i class="fas fa-user-circle"></i>
                                </Link>
                            </li>,
                            <li key={2}>
                                <span onClick={() => signOut()}>
                                    Logout
                                    <i class="fas fa-sign-out-alt"></i>
                                </span>
                            </li>
                        ]}
                        {/* if there is no user signed in, show: */}
                        {!currentUser && [
                            <li key={1} className="hideOnMobile">
                                <Link to="/register">Register</Link>
                            </li>,
                            <li key={2}>
                              <Link to="/login">Login
                                <i class="fas fa-user-circle"></i>
                              </Link>
                            </li>
                        ]}
                        <li className="mobileMenu">
                            <span onClick={() => setActiveMenu(!activeMenu)}>
                                <i className="fas fa-bars"></i>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
      </header>
    );
};

//if there is no user, the state is null by default
Header.defaultProps = {
  currentUser: null
};

export default Header;
