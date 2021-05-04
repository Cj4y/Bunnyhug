import React, { useState } from 'react';
import './styles.scss';

const Tile = ({ hideTile, toggleTile, children }) => {
  if (hideTile) return null;

  return [
    <div className="tileOverlay" onClick={() => toggleTile()} />,
    <div className="tileWrapper">
      <div className="tile">
        {children}
      </div>
    </div>
  ];
}

export default Tile;