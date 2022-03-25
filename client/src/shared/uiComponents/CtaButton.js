import React from 'react';
import SmallLoader from '../uiComponents/SmallLoader';

const CtaButton = ({
  loading = true,
  loadingText,
  scale = 0.4,
  onClick,
  text,
  classes = 'btn_med heading_small tablet',
}) => {
  return (
    <button
      onClick={onClick}
      className={`${classes} flexi btn_blue gap-15 upp`}
      disabled={loading}
    >
      {loading && <SmallLoader scale={scale} classes={'small'} />}
      <span style={{whiteSpace: 'nowrap'}}>
        {loading ? loadingText : text}

      </span>
    </button>
  );
};

export default CtaButton;
