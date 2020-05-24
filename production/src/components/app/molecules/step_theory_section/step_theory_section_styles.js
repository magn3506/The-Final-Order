import styled from "styled-components";
import {colors} from '../../../../styles/global/colors';
import {headings, bodyText} from '../../../../styles/global/typography';
import {breakpoints} from '../../../../styles/global/breakpoints';
import { IoIosCloseCircle } from "react-icons/io";

export const Container = styled.div`
width: 100%;
background: ${colors.dark_dark_purple};
padding: 20px 20px 30px 20px;
border-bottom: 4px solid ${colors.orange};
`;

export const TitleCon = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`;

export const Title = styled.h3`
color: ${colors.sand};
${headings.heading4_24px}
`;

export const Number = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 5px 10px 5px 10px;
background: ${colors.orange};
color: ${colors.dark_dark_purple};
${headings.heading4_24px}
border-radius: 5px;
margin-right: 20px;
`;

export const Label = styled.label`
color: ${colors.sand};
display: flex;
flex-direction: column;
${bodyText.normalTextBold_16px}
width: 100%;
margin-top: 15px;
margin-left: 5px;
`;

export const Input = styled.input`
width: 100%;
height: 50px;
background: #FFFFFF;
border-radius: 5px;
border: none;
padding: 15px 0 15px 0;
${bodyText.normalTextReg_16px}
outline: none;
margin: 5px 0 5px 0;

&:valid {
  outline: 2px solid ${colors.green_succes};
}

&::placeholder{
    padding-left: 15px;
}
`;

export const LabelDescription = styled.p`
color: ${colors.white};
${bodyText.normalTextReg_16px}
`;

export const TextArea = styled.textarea`
margin-bottom: 10px;
margin-top: 5px;
${bodyText.normalTextReg_16px}
padding: 5px 5px 5px 5px;
width: 100%;
outline: none;
border-radius: 5px;

@media ${breakpoints.minDog} {
    width: 100%;
}
`;

export const SourceCon = styled.div`
width: 100%;
margin: 20px 0 0 10px;
display: flex;
flex-direction: row;
`;

export const SourceTextCon = styled.div`

`;

export const SourceTitle = styled.h3`
color: ${colors.white};
${bodyText.normalTextBold_16px};
`;

export const SourceURL = styled.p`
color: ${colors.white};
${bodyText.normalTextReg_16px};
`;

export const CloseIcon = styled(IoIosCloseCircle)`

`;

export const CloseIconCon = styled.div`
cursor: pointer;
transition: .2s;
padding: 5px;
border-radius: 0px 3px 0px 3px;
&:hover {
    opacity: .8;
}
`;