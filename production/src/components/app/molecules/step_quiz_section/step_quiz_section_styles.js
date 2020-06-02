import styled from 'styled-components';
import {colors} from '../../../../styles/global/colors';
import {headings, bodyText} from '../../../../styles/global/typography';
import {breakpoints} from '../../../../styles/global/breakpoints';

export const Container = styled.div`
width: 100%;
background: #25212C;
padding: 20px 20px 30px 20px;
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
${bodyText.smallTextReg_13px}
outline: none;
margin: 5px 0 5px 0;

&:valid {
  border: 2px solid ${colors.green_succes};
  border-radius: 5px;
}

&::placeholder{
    padding-left: 15px;
}

@media ${breakpoints.minDog} {
flex-direction: row;
justify-content: space-between;
${bodyText.normalTextReg_16px}
}
`;

export const LabelDescription = styled.p`
${bodyText.normalTextReg_16px}
color: ${colors.white};
`;

export const OptionCon = styled.div`
position: relative;
width: 100%;
`;

export const RadioButton = styled.input`
position: absolute;
top: 25px;
right: 10px;
`;
