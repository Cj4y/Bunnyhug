import React from 'react';
import './styles.scss';

//otherProps allow to pass custom props to the Button
const Button = ({ children, ...otherProps }) => {
  return (
    <button className="btn" {...otherProps}>
      {children}
    </button>
  );
}

export default Button