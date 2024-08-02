import React from "react";
import {useInput} from "@/hooks/useInput.tsx";

interface InputProps {
  type?: string,
  placeholder: string,
  image?: JSX.Element,
  errorText?: string,
  errorFields: string[],
  inputValue: ReturnType<typeof useInput>,
  name: string,
  subject?: string,
}

export default function UiInput({ inputValue, subject, name, type = 'text', errorFields, errorText = 'Field is required', placeholder = '', image, }: InputProps) {
  const isErrored = errorFields.includes(name);

  const inputStyles = 'mb-1 border-solid w-full border-[1px] border-[#C5C6C7] px-[20px] flex gap-3 items-center'
  const inputErrorStyles = 'mb-1 border-solid w-full border-[1px] border-red-500 px-[20px] flex gap-3 items-center'

  return (
    <div className={'w-full relative flex flex-col'}>
      <div className={isErrored ? inputErrorStyles : inputStyles}>
        {image}

        <input
          {...inputValue}
          type={type}
          required={true}
          placeholder={placeholder}
          className={'outline-none text-[16px] w-full py-[15px]'}
        />

        <div className={'bg-white w-fit absolute top-[-8px] left-[20px] text-[18px]'}>
          <span className={isErrored ? 'text-[16px] text-red-500' : 'text-[16px]'}>{subject}</span>
        </div>
      </div>

      {isErrored && <span className={'text-red-500'}>{errorText}</span>}
    </div>
  )
}