import React from 'react';
import UseClickOutsideToclose from '../../hooks/UseClickOutsideToclose';
import UseToggle from '../../hooks/UseToogle';
import RenderIfTrue from '../RenderIfTrue';
import svgSprite from '../../../images/sprite.svg';

const DropDown = ({indicator, children}) => {
  const {isOpen, toogle, close} = UseToggle (false);
  UseClickOutsideToclose (isOpen, close);
  return (
    <div className="dropdown">
      {!indicator &&
        <button className="dropdown_toggle p-x-1" onClick={toogle}>
          <svg className="small_svg">
            <use xlinkHref={svgSprite + '#options'} />
          </svg>
        </button>}

      <RenderIfTrue condition={isOpen}>
        <div
          className="dropdown_base basecard bord-g-1 bg-w br"
          onClick={e => e.stopPropagation ()}
        >
          <ul className="dropdown_list">
            {children}
          </ul>
        </div>
      </RenderIfTrue>
    </div>
  );
};

export default DropDown;
