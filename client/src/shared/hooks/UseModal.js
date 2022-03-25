import {useState, useCallback} from 'react';

const UseModal = (state = false) => {
  const [isOpen, toggleModal] = useState (state);

  const open = useCallback (() => toggleModal (true), []);
  const close = useCallback (() => toggleModal (false), []);
  const toggle = useCallback (() => toggleModal (!isOpen), []);

  return {isOpen, close, open, toggle};
};

export default UseModal;
