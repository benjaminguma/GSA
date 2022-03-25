import React from 'react';
import './formselect.scss';

const Option = ({onChange, text, choosen, value = text}) => {
  return (
    <li
      className={`form_select_option heading_tiny ${choosen ? 'selected' : ''} `}
      onClick={() => {
        onChange (value);
      }}
    >
      <span>{text}</span>
    </li>
  );
};

export default Option;
