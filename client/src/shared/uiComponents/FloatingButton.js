import React from 'react';
import sprite from '../../images/sprite.svg';
import UseToggle from '../hooks/UseToogle';
import {Link} from 'react-router-dom';
import './floatingbutton.scss';
const FloatingButton = () => {
  const {isOpen, toogle} = UseToggle (false);
  return (
    <div className="fl_btn_con">
      {isOpen &&
        <div className="fl_btn_pack grid_txt_1 mb-2 ">
          <Link
            to="/event/create"
            className="btn_med bg-w heading_small col-b cap sha  tablet"
          >
            add event
          </Link>
          <button className="btn_med bg-gr heading_small col-w cap  tablet">
            view calendar
          </button>
        </div>}
      <button className="round fl_btn_round center-flex " onClick={toogle}>
        <svg className="med_svg col-w">
          <use xlinkHref={sprite + '#options'} />
        </svg>
      </button>
    </div>
  );
};

export default FloatingButton;
