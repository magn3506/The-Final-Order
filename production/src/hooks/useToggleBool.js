import { useState } from 'react';

const useToggleBool = (defaultParam) => {
  const [isShowing, setIsShowing] = useState(defaultParam);

  function toggle() {
    setIsShowing(!isShowing);
  }

  return [isShowing, toggle];
};

export default useToggleBool;