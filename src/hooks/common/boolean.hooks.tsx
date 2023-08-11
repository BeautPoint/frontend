import {useState} from 'react';

export const useBoolean = () => {
  const [value, setValue] = useState(false);
  const valueHandle = () => {
    setValue(!value);
  };

  return {value, valueHandle};
};
