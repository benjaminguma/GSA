import React from 'react';
import sprite from '../../images/sprite.svg';
import './crumb.scss';
const Crumb = ({text = 'category 1', onClose}) => {
  return (
    <div
      onClick={onClose}
      className={`crumb ${text.length > 10 ? 'crumb_large' : ''} pos-r tablet col-bl u-center `}
    >
      <button className="bg-w round" onClick={onClose}>
        <svg className=" round fill" style={{fill: '#93B3E5'}}>
          <use xlinkHref={sprite + '#close'} />
        </svg>

      </button>

      {text}
    </div>
  );
};

export default Crumb;
