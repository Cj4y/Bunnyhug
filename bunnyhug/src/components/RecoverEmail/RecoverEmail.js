//import react hooks
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { resetPasswordStart, resetUserState } from './../../redux/User/user.actions';
import './styles.scss';

import AuthWrapper from './../AuthWrapper';
import FormInput from './../forms/FormInput';
import Button from './../forms/Button';

//hold success and error states
const mapState = ({ user }) => ({
  resetPasswordSuccess: user.resetPasswordSuccess,
  userErr: user.userErr
});

const EmailPassword = props => {
  //dispatch is a redux hook to dispatch the redux action
  const dispatch = useDispatch();
  const history = useHistory();
  //grab the state case (see user.types) using redux useSelector hook
  const { resetPasswordSuccess, userErr } = useSelector(mapState);
  //set up react hooks with default empty string or empty array values
  //the first variable holds the value, the second is a setter
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);

  //update user state in render when password is successfully reset
  useEffect(() => {
    if (resetPasswordSuccess) {
      dispatch(resetUserState());
      //redirect to login page
      history.push('/login');
    }
  }, [resetPasswordSuccess]);

  //add error state
  useEffect(() => {
    if (Array.isArray(userErr) && userErr.length > 0) {
      setErrors(userErr);
    }
  }, [userErr]);

  //go to resetPasswordStart to handle database change
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(resetPasswordStart({ email }));
  }

  //set the headline in this reusable component
  const configAuthWrapper = {
    headline: 'Email my password'
  };

  return (
    //pass props to AuthWrapper component
    <AuthWrapper {...configAuthWrapper}>
      <div className="formWrap">
        {/* render errors if in error state  */}
        {errors.length > 0 && (
          <ul>
            {errors.map((e, index) => {
              return (
                <li key={index}>
                  {e}
                </li>
              );
            })}
          </ul>
        )}
        {/* take target data in recovery form */}
        <form onSubmit={handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={email}
            placeholder="Email"
            handleChange={e => setEmail(e.target.value)}
          />

          <Button type="submit">Email your password</Button>
        </form>

        <div className="links">
          <Link to="/login">Log in</Link>
          {` | `}
          <Link to="/register">Register</Link>
        </div>
      </div>
    </AuthWrapper>
  );
}

export default EmailPassword;
