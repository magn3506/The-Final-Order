import React from 'react';
import {InputField} from "./input_styles";

const Input = props => {
    return <InputField required placeholder={props.placeholder} name={props.name} type={props.type}/>
}

export default Input;
