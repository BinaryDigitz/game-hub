import React from "react";
import "./button.css"
interface Props{
    className: string;
    type?: 'submit'
    disable?: boolean;
    onClick?:() => void | string
    children:React.ReactNode,
    leftIcon?: string,
    rightIcon?: string
}

function Button(props : Props) {
    const { children, className, type, disable, onClick, leftIcon, rightIcon } = props;
  return (
    <button className={`${className} `} type={type && type} disabled={disable && true} onClick={onClick}>
      {leftIcon && <span>{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span>{rightIcon}</span>}
    </button>
  )
}

export default Button
