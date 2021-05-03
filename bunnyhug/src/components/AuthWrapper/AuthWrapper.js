import React from 'react';
import './styles.scss';

//import the headline and children of component
const AuthWrapper = ({ headline, children }) => {
  return (
    <div className="authWrapper">
      <div className="wrapper">
      {/* render headline if in props */}
        {headline && <h2>{headline}</h2>}

        <div className="children">
        {/* render children if in props */}
          {children && children}
        </div>
      </div>
    </div>
  );
}

export default AuthWrapper;