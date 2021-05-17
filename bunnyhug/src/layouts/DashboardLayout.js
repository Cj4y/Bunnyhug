import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
//import redux actions
import { signOutUserStart } from './../redux/User/user.actions';

//add components
import Header from './../components/Header/Header';
import VerticalNav from './../components/VerticalNavBar/VerticalNavBar';
import Footer from './../components/Footer/Footer';

const DashBoardLayout = props => {
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUserStart());
  };

  return (
    // show user dashboard if a valid user is logged in
    //prevent if otherwise
    <div className="dashboardLayout">
      <Header {...props} />
      <div className="controlPanel">
        <div className="sidebar">
          <VerticalNav>
            <ul>
              <li>
                <Link to="/sell">
                  My Closet
                </Link>
              </li>
              <li>
                <Link to="/dashboard">
                  My Orders
                </Link>
              </li>
              <li>
                <span className="signOut" onClick={() => signOut()}>
                  Sign Out
                </span>
              </li>
            </ul>
          </VerticalNav>
        </div>
        <div className="content">
          {props.children}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DashBoardLayout;