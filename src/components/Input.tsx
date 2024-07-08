import React from "react";
import {useInput} from "@/hooks/useInput/useInput.tsx";

interface InputProps {
  type: string,
  placeholder: string,
  image?: JSX.Element,
  errorText: string,
  errorFields: string[],
  inputValue: ReturnType<typeof useInput>,
  name: string,
}

export default function Input({ inputValue, name, type = 'text', errorFields, errorText = 'Field is required', placeholder = '', image, }: InputProps) {
  const isErrored = errorFields.includes(name);

  const inputStyles = 'border-solid w-full border-[1px] border-[#C5C6C7] px-[20px] flex gap-3 items-center'
  const inputErrorStyles = 'border-solid w-full border-[1px] border-red-500 px-[20px] flex gap-3 items-center'

  return (
    <div className={'w-full relative flex flex-col'}>
      <div className={isErrored ? inputErrorStyles : inputStyles}>
        {image}

        <input
          {...inputValue}
          type={type}
          required={true}
          placeholder={placeholder}
          className={'outline-none text-[19px] font-medium w-full py-[20px]'}
        />
      </div>

      {isErrored && <span className={'absolute bottom-[-20px] left-0 text-red-500'}>{errorText}</span>}
    </div>
  )
}