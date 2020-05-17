import React, { Fragment } from 'react';
import styled from "styled-components";
import {bodyText} from "../../../styles/global/typography";
import {colors} from "../../../styles/global/colors";

const InputField = styled.input`
width: 360px;
background: #FFFFFF;
border-radius: 5px;
border: none;
padding: 15px;
${bodyText.normalTextReg_16px}
outline: none;

&:valid {
  border: 2px solid ${colors.green_succes};
}
`;

const Input = props => {
    return <InputField required placeholder={props.placeholder} name={props.name} type={props.type}/>

}

export default Input
