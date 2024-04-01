
import {  Controller,Control,FieldErrors } from 'react-hook-form';
import { FC } from 'react';

interface InputProps {
  control: Control<any>;
  name: string;
  label: string;
  errors:FieldErrors;
  type?:string
}

const InputField:FC<InputProps> = ({control,name,label,errors,type="text"}) => {
  return (
    <div className=" space-y-1">
      <label className="text-sm text-gray-600">{label}</label>
      <Controller
        control={control}
        name={name}
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        render={({ field:{value,...props} }) => (
          <input
            {...props}
            className={` text-gray-600 block  rounded-md w-full border  py-3 px-4 focus:outline-none outline-none text-sm ${errors[name] ? 'border-red-600':''}`}
            type={type}
          />
          
        )}
      />
      {errors[name] && <label className='text-xs text-red-600'>{errors[name]?.message as string}</label>}
    </div>
  )
}

export default InputField