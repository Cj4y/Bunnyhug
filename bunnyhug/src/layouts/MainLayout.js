import React from 'react';
//import './styles.scss';
import Header from '../components/Header/Header';

//props to access current user information
const MainLayout= props =>{
    return (
        <div className="homepage">
            <Header />
            <div className="main">
                {props.children}
            </div>
        </div>
    );
};

export default MainLayout;
