import { useState, useCallback } from 'react';

const useInput = (intivalValue) => {
  const [state, setState] = useState('');
  const setStateHandler = useCallback((event) => {
    setState(event.target.value);
  }, []);
  const reset = useCallback(() => setState(intivalValue), [intivalValue]);
  return [state, setStateHandler, reset];
};

export default useInput;
