import React, {Children, Fragment} from 'react';
import {createPortal} from 'react-dom';

function Modal({children, close, isOpen, onSubmit, classes = 'center-abs'}) {
  const element = isOpen
    ? <Fragment>
        <div className="backdrop fill" onClick={close} />
        <div className="modal_con" onClick={close}>

          <div
            className={`modal ${classes} topup`}
            onClick={e => e.stopPropagation ()}
          >
            {Children.map (children, child =>
              React.cloneElement (child, {
                close,
                onSubmit,
                ...child.props,
              })
            )}

          </div>
        </div>

      </Fragment>
    : null;

  return createPortal (element, document.getElementById ('modal_container'));
}

export default Modal;
