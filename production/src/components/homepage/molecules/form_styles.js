import styled from "styled-components";
import {bodyText, headings} from "../../../styles/global/typography";
import {colors} from "../../../styles/global/colors";
import { IoIosCloseCircle } from "react-icons/io";

export const Wrapper = styled.div`
width: 100%;
display: flex;
justify-content: center;
position: fixed;
z-index: 3;
top: 20%;
left: 0;
`;

export const Overlay = styled.div`
position: fixed;
top: 0;
left: 0;
z-index: 1;
width: 100vw;
height: 100vh;
background-color: #000;
opacity: .5;
`; 

export const Form = styled.form`
position: relative;
width: 500px;
background: ${colors.dark_dark_purple};
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding-top: 20px;
padding-bottom: 20px;
border-radius: 5px;
z-index: 2;
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
color: ${props => props.linkColor || colors.sand};
${bodyText.normalTextBold_16px}
text-decoration: none;
/* padding: ${props => props.padding === 'true' ? '12px 0px 12px 0px' : '0'}; Find solution*/
padding: 12px 0 12px 0;
cursor: pointer;
&:hover {
    opacity: .8;
}
`;

export const GoogleButton = styled.div`
width: 300px;
background: #FFFFFF;
border-radius: 5px;
border: none;
text-align: center;
padding: 10px 0 10px 0;
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

export const CloseIcon = styled(IoIosCloseCircle)`
position:absolute;
top: 10px;
right: 10px;
cursor: pointer;
transition: .2s;
&:hover {
    opacity: .8;
}
`;