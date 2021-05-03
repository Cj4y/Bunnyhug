import React from 'react';

import Header from './../components/Header/Header';
import Footer from './../components/Footer/Footer';

//props to access current user information
const HomepageLayout = props => {
  return (
    <div className="fullHeight">
      <Header {...props} />
      {props.children}
      <Footer />
    </div>
  );
};

export default HomepageLayout;
