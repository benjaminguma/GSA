import React from 'react';
import SvgSprite from '../../images/sprite.svg';

const SidebarLink = ({
  index,
  count,
  title,
  handleClick,
  onClick,
  active,
  ...restProps
}) => {
  let showIcon = false;
  if (restProps.icon) showIcon = true;
  return (
    <li className="sidebar_list_item" key={index}>
      {!showIcon
        ? <button
            className={`sidebar_link btn_plain cap u-left ${active ? ' active' : ''}`}
            onClick={handleClick}
          >

            {title} {`(${count})`}
          </button>
        : <button
            className={`sidebar_link btn_plain cap flexi ${active ? ' active' : ''}`}
            onClick={() => onClick (title)}
          >
            <svg className="small_svg mr-1">
              <use xlinkHref={SvgSprite + `#${restProps.icon}`} />
            </svg>
            <span className="heading_small  cap"> {title}</span>
          </button>}
    </li>
  );
};

export default SidebarLink;
