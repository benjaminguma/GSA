import React from 'react';
import {Link} from 'react-router-dom';
const DropBtn = ({text, onClick, classes}) => {
  return (
    <li className="dropdown_list_item">
      {typeof onClick === 'string'
        ? <Link
            href=""
            className={`dropdown_button cap heading_small_1  ${classes}`}
          >
            {text}
          </Link>
        : <button
            onClick={onClick}
            className={`dropdown_button cap heading_small_1  ${classes}`}
          >
            {text}
          </button>}
    </li>
  );
};

export default DropBtn;
