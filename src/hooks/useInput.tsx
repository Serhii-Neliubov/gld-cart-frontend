import React from 'react';

export const useInput = (initialValue: string) => {
  const [value, setValue] = React.useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement> |  React.ChangeEvent<HTMLTextAreaElement> |  React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
};