import React from 'react';
import './loader.css';

const SmallLoader = ({scale = 0.8, classes}) => {
  return (
    <div
      className={`lds-spinner ${classes}`}
      style={{transform: `scale(${scale ? scale : 1})`}}
    >
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
  );
};

export default SmallLoader;
