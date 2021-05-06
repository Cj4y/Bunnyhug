import React from 'react';
import { useSelector } from 'react-redux'
import UserProfile from './../UserProfile/UserProfile';
import './styles.scss';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
})

const VerticalNav = ({ children }) => {
  const { currentUser } = useSelector(mapState);

  const configUserProfile = {
    currentUser
  }

  return (
    <div className="verticalNav" data-type="verticalNav">
    {/* show the user name and profile picture associated */}
      <UserProfile {...configUserProfile} />
      <div className="menu">
      {/* add the menu items from AdminLayout*/}
        {children}
      </div>
    </div>
  );
}

export default VerticalNav;