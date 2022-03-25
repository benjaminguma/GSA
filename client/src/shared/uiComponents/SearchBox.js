import React from 'react';
import svgSprite from '../../images/sprite.svg';
import './searchbox.scss';

const SearchBox = () => {
  return (
    <div className="searchbox br ">
      <input
        type="text"
        name="search"
        id="search"
        placeholder="search for products..."
        autoComplete="off"
        className="searchbox_input  tablet"
      />
      <button className="btn_yellow searchbox_button">
        <svg className="small_svg">
          <use xlinkHref={svgSprite + '#search'} />
        </svg>
      </button>
    </div>
  );
};

export default SearchBox;
