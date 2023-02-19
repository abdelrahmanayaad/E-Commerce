import React, {useState} from 'react';
import {validate} from './Validate';

export default function useInput(initialState, rules) {
  const [input, setInput] = useState({
    value: '' || initialState,
    isValid: false,
    times: false,
  });

  const updateInput = inputValue => {
    setInput({
      ...input,
      value: inputValue,
      isValid: validate(inputValue, rules),
    });
  };
  return [input, updateInput];
}
