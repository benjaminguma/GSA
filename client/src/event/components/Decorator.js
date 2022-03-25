import React from 'react';
import e1 from '../../images/svg/e1.svg';
import e from '../../images/svg/e.svg';
import './dec.scss';

const Decorator = () => {
  return (
    <div className="dec">
      <div className="dec_img_box flexi sp-btw">
        <img src={e} className="dec_img" alt="poo" />
        <img src={e1} className="dec_img" alt="poo" />
      </div>
    </div>
  );
};

export default Decorator;
