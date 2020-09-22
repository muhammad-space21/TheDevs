import React from 'react';

import './styles.scss';

const SpinnerMain = () => {
  return (
    <div className="container-spinner">
      <div className="spinner-body">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="base-spinner">
          <span></span>
        </div>
        <div className="face-spinner"></div>
      </div>
        <div className="longfazers-spinner">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      <div className="loading">Loading</div> 
    </div>
  )
};


export default SpinnerMain;