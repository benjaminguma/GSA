import React from 'react';

const Card = ({xtraClassNames, children}) => {
  return (
    <div className={'card ' + xtraClassNames}>
      {children}
    </div>
  );
};

export default Card;
