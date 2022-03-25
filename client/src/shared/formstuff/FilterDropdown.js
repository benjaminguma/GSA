import React from 'react';

import './form.scss';
import './formselect.scss';

const FilterDropdown = () => {
  return (
    <div className="form_group">
      <div className="form_select">
        <div className="form_select_title close bord-1-blue">
          <span className="pl cap">sort &nbsp;</span>
        </div>
        <div className="basecard">
          <ul className="form_select_list open bg-w">
            <li className="form_select_option"><span>option 1</span></li>
            <li className="form_select_option"><span>option 1</span></li>
            <li className="form_select_option"><span>option 1</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FilterDropdown;
