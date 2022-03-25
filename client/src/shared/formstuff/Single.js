import React, {useEffect, useRef} from 'react';

const Single = ({name, count, id, value, changeHandler, size = 1}) => {
  const myref = useRef ();

  useEffect (
    () => {
      if (myref.current && count === id) myref.current.focus ();
    },
    [count, id]
  );

  return (
    <input
      ref={myref}
      className="form_input_single heading_large weit-1 u-center br"
      placeholder="0"
      type="text"
      name={name}
      id={id}
      size={size}
      value={value}
      maxLength={1}
      onChange={e => changeHandler (e.target.value)}
    />
  );
};

export default Single;
