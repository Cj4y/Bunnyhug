import React from 'react';
import './styles.scss';
import logo from '../../assets/cover.png';

const Header = props =>{
    return (
        <header className="header">
            <div className="wrapper">
                <div className="logo">
                    <img src={logo} alt="Bunnyhug lgoo"/>

                </div>


            </div>
        </header>
    );
};

export default Header;
