import React from 'react';
import './styles.scss';
import { Link } from 'react-router-dom';

import explore from '../../assets/explore.png';
import consign from '../../assets/consign2.jpg';

const Directory = props =>{
    return (
        <div className="directory">
            <div className="wrapper">
                <div className="pathway"
                    style={{
                        backgroundImage: `url(${explore})`
                    }}
                >
                <Link to="/search/">
                    Explore
                </Link>
                </div>

                <div className="pathway"
                    style={{
                        backgroundImage: `url(${consign})`
                    }}

                >
                <Link to="/admin/">
                    Sell
                </Link>
                </div>

            </div>
        </div>
    );
};

export default Directory;
