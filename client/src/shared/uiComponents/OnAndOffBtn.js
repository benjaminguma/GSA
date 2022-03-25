import React from 'react';

const OnAndOffBtn = ({on, onChange, onTxt, offTxt, name, big, disabled}) => {
  return (
    <div className={`toggle_btn  ${big ? 'big' : ''}`}>
      <input
        type="checkbox"
        name={name}
        id={name}
        checked={on}
        onChange={onChange}
      />
      <label
        htmlFor={name}
        className={`onoff tablet ${disabled ? 'disabled' : ''}`}
        data-txt={on ? onTxt || null : offTxt || null}
      />
    </div>
  );
};

export default OnAndOffBtn;
