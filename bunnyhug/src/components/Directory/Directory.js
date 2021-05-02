import React from 'react';
import './styles.scss';

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
                    <a>Explore</a>
                </div>

                <div className="pathway"
                    style={{
                        backgroundImage: `url(${consign})`
                    }}

                >
                    <a>Sell</a>
                </div>

            </div>
        </div>
    );
};

export default Directory;
