import {useEffect} from 'react';

const UseClickOutsideToclose = (isOpen, close) => {
  useEffect (
    () => {
      if (isOpen) document.addEventListener ('click', close);

      return () => {
        document.removeEventListener ('click', close);
      };
    },
    [isOpen]
  );
};

export default UseClickOutsideToclose;
