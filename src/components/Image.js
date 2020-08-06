import React from 'react';

const Image = ({ className, picture, orientation}) => (
  <div
    style={{
      padding: '0',
      width: '100%',
      display: 'inline-block',
      margin: 'auto',
      position: 'relative'
    }}
  >
    <img src={picture} style={{borderRadius: '6.90px'}}/>
    <div
      style={{
        left: orientation == 0 ? '12px' : '-12px',
        position: 'absolute',
        border: `25px solid rgb(254, 118, 106)`,
        width: '100%',
        height: '100%',
        top: '12px',
        borderRadius: '6.90px',
        zIndex: -2,
      }}
    ></div>
    
  </div>
);

export default Image;
