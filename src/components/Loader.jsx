import React from 'react';
import './Loader.css'; // We will update the CSS

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <span className="letter">N</span>
        <span className="letter">Y</span>
        <span className="letter">D</span>
      </div>
    </div>
  );
};

export default Loader;
