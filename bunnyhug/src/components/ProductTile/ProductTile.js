import React, { useState } from 'react';
import './styles.scss';

const ProductTile = ({ hideTile, toggleTile, children }) => {
  if (hideTile) return null;

  return [
    <div className="tileOverlay" data-type="tileOverlay" onClick={() => toggleTile()} />,
    <div className="tileWrapper">
      <div className="tile" data-type="tile">
        {children}
      </div>
    </div>
  ];
}

export default ProductTile;