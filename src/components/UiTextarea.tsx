import React from "react";
import {useInput} from "@/hooks/useInput.tsx";

interface TextareaProps {
  placeholder: string,
  image?: JSX.Element,
  errorText?: string,
  errorFields: string[],
  textareaValue: ReturnType<typeof useInput>,
  name: string,
  subject?: string,
}

export default function UiTextarea({ textareaValue, subject, name, errorFields, errorText = 'Field is required', placeholder = '', }: TextareaProps) {
  const isErrored = errorFields.includes(name);

  const textareaStyles = 'mb-1 border-solid w-full border-[1px] border-[#C5C6C7] p-[10px]'
  const textareaErrorStyles = 'mb-1 border-solid w-full border-[1px] border-red-500 p-[10px]'

  return (
    <div className={'w-full relative flex flex-col'}>
      <div className={isErrored ? textareaErrorStyles : textareaStyles}>
        <textarea
          {...textareaValue}
          required={true}
          placeholder={placeholder}
          className={'w-full resize-none outline-none text-[18px] min-h-[200px] font-medium p-[12px] border-none'}
        />


        <div className={'bg-white w-fit absolute top-[-8px] left-[20px] text-[18px]'}>
          <span className={isErrored ? 'text-[18px] text-red-500' : 'text-[18px]'}>{subject}</span>
        </div>
      </div>

      {isErrored && <span className={'text-red-500'}>{errorText}</span>}
    </div>
  )
}