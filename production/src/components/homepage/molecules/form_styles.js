import styled from "styled-components";
import {bodyText, headings} from "../../../styles/global/typography";
import {colors} from "../../../styles/global/colors";

export const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
`;

export const Form = styled.form`
width: 500px;
background: ${colors.dark_dark_purple};
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-top: 20px;
padding-bottom: 20px;
margin-top: 50px;
border-radius: 5px;
`;

export const Text = styled.div`
color: ${colors.sand};
${bodyText.normalTextReg_16px}
padding: 5px;
`;

export const Title = styled.div`
color: ${colors.sand};
${headings.heading4_24px}
padding: 10px;
`;

export const Link = styled.a`
color: ${colors.sand};
${bodyText.normalTextBold_16px}
`;

export const GoogleButton = styled.div`
width: 300px;
background: #FFFFFF;
border-radius: 5px;
border: none;
text-align: center;
padding: 10px;
${bodyText.normalTextReg_16px}
outline: none;
margin: 5px;
cursor: pointer;
transition: .3s;

&:hover{
    opacity: .8;
}

& .icon{

}
`;