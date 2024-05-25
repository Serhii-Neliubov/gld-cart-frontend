import {ChangeEvent, useState} from "react";

export const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement> |  ChangeEvent<HTMLTextAreaElement> |  ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
};