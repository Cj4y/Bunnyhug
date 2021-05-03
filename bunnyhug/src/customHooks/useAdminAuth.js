import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { checkUserIsAdmin } from './../Utils';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
});

//check if the user is an admin type user
//if user is not logged in, redirect them to log in
const useAdminAuth = props => {
  const { currentUser } = useSelector(mapState);
  const history = useHistory();

  useEffect(() => {
    if (!checkUserIsAdmin(currentUser)) {
      history.push('/login');
    }
  }, [currentUser]);

  return currentUser;
}

export default useAdminAuth;