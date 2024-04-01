import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { FC } from "react"
import {Link} from 'react-router-dom'


interface ButtonProps {
  label: string,
  className?: string,
  icon?: React.ReactElement
  link?: string;
  disabled?:boolean;
  isLoading?:boolean
}
const Button: FC<ButtonProps> = ({ label, className, link,icon,disabled,isLoading }) => {
  return (
    <>
      {link ? (<Link className={`rounded-lg p-3 text-white text-base  flex gap-2  font-medium  ${className} hover:bg-opacity-90`} to={link}>   {icon && icon}  {label}</Link>) : (<button disabled={disabled} className={`rounded-lg p-3 text-white text-base  flex gap-2 font-medium  ${className} hover:bg-opacity-90`}>
        {icon && icon}  {label} {isLoading  && (<><ArrowPathIcon className="w-5 animate-spin" /></>)}
      </button>)}
    </>
  )
}

export default Button