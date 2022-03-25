import React from 'react';

const CheckSelectItem = ({
  onChange,
  checked,
  text = 'dummy text',
  value = text,
}) => {
  return (
    <li
      className="btn flexi gap-15 col-bl form_select_option_check"
      onClick={() => {
        onChange (value);
      }}
    >
      <span className={`dummy_check pos-r ${checked ? 'checked' : ''}`} />
      <span className="heading_tiny cap">
        {text}
      </span>
    </li>
  );
};

export default CheckSelectItem;
