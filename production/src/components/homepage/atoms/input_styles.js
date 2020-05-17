import styled from "styled-components";
import {bodyText} from "../../../styles/global/typography";
import {colors} from "../../../styles/global/colors";

export const InputField = styled.input`
width: 300px;
background: #FFFFFF;
border-radius: 5px;
border: none;
padding: 15px;
${bodyText.normalTextReg_16px}
outline: none;
margin: 5px;

&:valid {
  border: 2px solid ${colors.green_succes};
}
`;