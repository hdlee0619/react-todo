import { useState, useCallback } from 'react';

const useInput = (value) => {
  const [state, setState] = useState(value);
  const setStateHandler = useCallback((item) => {
    setState(item);
  }, []);
  return [state, setStateHandler];
};

export default useInput;
