//import react hook
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

//map state to user
const mapState = ({ user }) => ({
  currentUser: user.currentUser
});

//if user is not logged in, redirect them to log in
const useAuth = props => {
  const { currentUser } = useSelector(mapState);
  const history = useHistory();

  useEffect(() => {
    if (!currentUser) {
      history.push('/login');
    }
  }, [currentUser]);
  return currentUser;
};

//return the current user
export default useAuth;