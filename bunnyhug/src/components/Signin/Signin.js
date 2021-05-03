//import react hooks
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { emailSignInStart, googleSignInStart } from './../../redux/User/user.actions';

import './styles.scss';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';

const mapState = ({ user }) => ({
  currentUser: user.currentUser
});

const SignIn = props => {
  //dispatch is a redux hook to dispatch the redux action
  const dispatch = useDispatch();
  //use to redirect the user
  const history = useHistory();
  //grab the state case (see user.types) using redux useSelector hook
  const { currentUser } = useSelector(mapState);
  //set up react hooks with empty string default value
  //the first variable holds the value, the second is a setter
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  //trigger hook only when current user changes
  useEffect(() => {
    //call the function to empty the form
    if (currentUser) {
      resetForm();
      //redirect to home
      history.push('/');
    }

  }, [currentUser]);

  //reset form to default blank fields
  const resetForm = () => {
    setEmail('');
    setPassword('');
  };

  //function for user sign in
  const handleSubmit = e => {
    e.preventDefault(); //prevent reloading of page
    dispatch(emailSignInStart({ email, password }));
  }

  //in this case, the user logs in with a google account
  const handleGoogleSignIn = () => {
    dispatch(googleSignInStart());
  }

  //set the headline in this reusable component
  const configAuthWrapper = {
    headline: 'LogIn'
  };

  return (
    //pass props to AuthWrapper component
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrapper">
      {/* /call function to handle user submit*/}
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            // take the event, and grab the value inputted by user
            handleChange={e => setEmail(e.target.value)}
          />

          <FormInput
            type="password"
            name="password"
            value={password}
            placeholder="Password"
            handleChange={e => setPassword(e.target.value)}
          />

          <Button type="submit">
            Log in
          </Button>

          <div className="socialSignin">
            <div className="row">
              <Button onClick={handleGoogleSignIn}>
                Sign in with Google
              </Button>
            </div>
          </div>

          <div className="links">
            <Link to="/register">
              Register
            </Link>
            {` | `}
            <Link to="/recovery">
              Reset Password
            </Link>
          </div>

        </form>
      </div>
    </AuthWrapper>
  );
}

export default SignIn;
