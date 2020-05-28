import React, { FunctionComponent } from "react";

type Props = {
  type: 'search'
  placeholder: string
  className: string
}

const Input: FunctionComponent<Props> = ({type, placeholder, className}) => {
  return (
    <input type={type} placeholder={placeholder} className={className} />
  )
};

export default Input;