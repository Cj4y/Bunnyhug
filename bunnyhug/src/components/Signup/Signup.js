//import react hooks
import React, { useState, useEffect } from 'react';
//import redux hooks
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { signUpUserStart } from './../../redux/User/user.actions';
import './styles.scss';

import AuthWrapper from './../AuthWrapper/AuthWrapper';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
  userErr: user.userErr
});

const Signup = props => {
  //dispatch is a redux hook to dispatch the redux action
  const dispatch = useDispatch();
  //use to redirect the user
  const history = useHistory();
  //grab the state case (see user.types) using redux useSelector hook
  const { currentUser, userErr } = useSelector(mapState);
  //set up react hooks with default empty string or empty array values
  //the first variable holds the value, the second is a setter
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState([]);

  //make change if currentUser changes
  useEffect(() => {
    //empty the form
    if (currentUser) {
      reset();
      history.push('/');
    }

  }, [currentUser]);

  //is the array valid?
  //check if array contains an error, pass the value of the error
  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }
  }, [userErr]);

  //called when there is an error signing up, or succesful, and reset the form
  const reset = () => {
    setDisplayName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setErrors([]);
  };

  //when button clicked,
  const handleFormSubmit = event => {
    event.preventDefault();
    dispatch(signUpUserStart({
      displayName,
      email,
      password,
      confirmPassword
    }));
  }

  //set the headline in this reusable component
  const configAuthWrapper = {
    headline: 'Register'
  };


    return (
        //pass props to AuthWrapper component
        <AuthWrapper {...configAuthWrapper}>
            <div className="formWrapper">
            {/* render any error messages in sign up form as li */}
                {errors.length > 0 && (
                    <ul>
                        {errors.map((err, index) => {
                        return (
                            <li key={index}>
                            {err}
                            </li>
                        );
                        })}
                    </ul>
                )}
                <form onSubmit={handleFormSubmit}>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={displayName}
                        placeholder="Full name"
                        // take the event, and grab the value inputted by user
                        handleChange={e => setDisplayName(e.target.value)}
                    />
                    <FormInput
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Email"
                        handleChange={e => setEmail(e.target.value)}
                    />
                    <FormInput
                        type="password"
                        name="password"
                        value={password}
                        placeholder="Password"
                        handleChange={e => setPassword(e.target.value)}
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        placeholder="Confirm your Password"
                        handleChange={e => setConfirmPassword(e.target.value)}
                    />
                    <Button type="submit">Register</Button>
                </form>
                <div className="links">
                    <Link to="/login">Log in</Link>
                    {` | `}
                    <Link to="/recovery">Reset Password</Link>
                </div>
            </div>
        </AuthWrapper>
    );
}

export default Signup;