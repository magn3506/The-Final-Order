import styled from 'styled-components';
import {colors} from '../../../../styles/global/colors';
import {bodyText} from '../../../../styles/global/typography';

export const Label = styled.label`
color: ${colors.sand};
display: flex;
flex-direction: column;
${bodyText.normalTextBold_16px}
width: 100%;
margin-top: 15px;
margin-left: 5px;
`;

export const LabelDescription = styled.p`
color: ${colors.white};
${bodyText.normalTextReg_16px}
`;

export const AddSourcesCon = styled.div`
width: 100%;
border-radius: 5px;
background: ${colors.white};
position: relative;
margin-left: 5px;
margin-top: 5px;
`;

export const Input = styled.input`
background: ${colors.white};
border: none;
outline: none;
color: ${colors.grey};
width: 100%;
padding: 15px 15px 15px 15px;
${bodyText.normalTextReg_16px};
border-radius: 5px;
`;

export const TitleInputTitle = styled.div`
background: ${colors.sand};
${bodyText.normalTextBold_16px};
display: flex;
justify-content: center;
align-items: center;
width: 75px;
height: 50px;
border-radius: 5px 0 0 0;
`;
export const TitleInputURL = styled.div`
background: ${colors.sand};
${bodyText.normalTextBold_16px};
display: flex;
justify-content: center;
align-items: center;
width: 75px;
height: 50px;
border-radius: 0 0 0 5px;
`;

export const InputCon = styled.div`
display: flex;
flex-direction: row;
width: 100%;
`;

export const Button = styled.button`
background: ${colors.sand};
padding: 7px 20px 7px 20px;
${bodyText.normalTextBold_16px};
position: absolute;
bottom: 10px;
right: 10px;
border: none;
border-radius: 5px;
cursor: pointer;
transition: .3s;

&:hover {
    opacity: .8;
}
`;