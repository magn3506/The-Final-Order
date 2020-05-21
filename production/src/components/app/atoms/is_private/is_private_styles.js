import styled from 'styled-components';
import {colors} from "../../../../styles/global/colors";
import {bodyText} from "../../../../styles/global/typography";

export const RadioButton = styled.input`
margin-right: 5px;
`;

export const LabelRadioButton = styled.label`
color: ${colors.white};
margin-right: 25px;
`;

export const Description = styled.p`
color: ${colors.sand};
${bodyText.normalTextBold_16px}
margin-bottom: 10px;
`;

export const RadioContainer = styled.div`
margin: 0 15px 15px 0;
`;