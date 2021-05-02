import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import './styles.scss';

const Signup = props => {
    const history = useHistory();
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        if (currentUser) {
          reset();
          history.push('/');
        }

      }, []);

      useEffect(() => {
        if (Array.isArray(userErr) && userErr.length > 0) {
          setErrors(userErr);
        }

      }, []);


    return (
        <div className="formWrapper">
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
                    placeholder="Confirm Password"
                    handleChange={e => setConfirmPassword(e.target.value)}
                />
                <Button type="submit">
                    Register
                </Button>
            </form>
            <div className="links">
                <Link to="/login">
                    Log in
                </Link>
                {` | `}
                <Link to="/recovery">
                    Reset Password
                </Link>
            </div>
        </div>
    );
}

export default Signup;