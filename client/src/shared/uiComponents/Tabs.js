import React, {Fragment, useState} from 'react';
import * as tb from './Tab.module.scss';

const tbs = ['this week', 'next week', 'from'];
console.log (tb);
const Tabs = ({children, tabs = tbs}) => {
  const [active, setActive] = useState (0);
  const switchTab = id => {
    setActive (id);
  };

  return (
    <Fragment>
      <div className={`${tb.tab_container} bg-w`}>
        {tabs.map ((txt, id) => (
          <button
            onClick={() => switchTab (id)}
            className={`${tb.tab_item} ${active === id ? tb.tab_active : ''} u-center  heading_small col-g-2 upp`}
          >
            {txt}
          </button>
        ))}

      </div>
      {React.Children.map (children, child => {
        console.log ({childProps: child.props});
        return React.cloneElement (child, {
          ...child.props,
          setActive,
        });
      })}
    </Fragment>
  );
};

export default Tabs;
