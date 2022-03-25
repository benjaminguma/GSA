import React from 'react';

const TopNav = ({left, right, classes}) => {
  return (
    <header className="top_nav bg-w bord-bott-2">
      <div className={`container-c1000 m-auto sp-btw flexi  ${classes}`}>
        <div>
          {left}
        </div>
        <div>
          {right}
        </div>
      </div>
    </header>
  );
};

export default TopNav;
