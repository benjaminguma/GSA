import React, {Fragment} from 'react';
import Modal from '../../shared/uiComponents/Modal';
import {DropBtn, DropDown} from '../../shared/uiComponents/Dropdown';

const OptionsBox = ({toogle, isOpen, close, width = 400}) => {
  const Pack = (
    
  );
  if (width <= 400) {
    return (
      <Modal position="base_bottom" isOpen={isOpen} close={close}>
        <div className="basecard">
          {React.cloneElement (Pack, {
            ...Pack.props,
            indicator: false,
          })}
        </div>
      </Modal>
    );
  }
  return Pack;
};

export default OptionsBox;
