import styled from "styled-components";
import {breakpoints} from "../../../../styles/global/breakpoints";
import {bodyText} from "../../../../styles/global/typography";
import {colors} from "../../../../styles/global/colors";
import { IoIosClose } from "react-icons/io";

export const Wrapper = styled.div`
width: 100%;
height: 100vh;
display: flex; 
justify-content: center;
flex-direction: column;
`;

export const Container = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
height: 100%;

@media ${breakpoints.minDog} {
  flex-direction: row;
  height: 75vh;
}
`;

export const CloseIcon = styled(IoIosClose)`

`;

export const CloseIconCon = styled.div`
position:absolute;
top: 0;
right: 0;
cursor: pointer;
transition: .2s;
background: ${colors.orange};
padding: 3px 3px 1px 3px;
border-radius: 0px 3px 0px 3px;
&:hover {
    opacity: .8;
}
`;


export const Form = styled.form`
position: relative;
z-index: 0;
background: #25212C;
border-radius: 0;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

@media ${breakpoints.minDog} {
border-radius: 0px 5px 5px 0;
overflow: scroll;
overflow-x: hidden;

/* width */
::-webkit-scrollbar {
  width: 7px;
}

/* Track */
::-webkit-scrollbar-track {
 background: white;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
  background: ${colors.orange}; 
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
}
}
`;

export const Label = styled.label`
color: ${colors.sand};
display: flex;
flex-direction: column;
${bodyText.normalTextBold_16px}
width: 100%;
margin-top: 10px;
`;

export const LabelDescription = styled.p`
color: ${colors.white};
${bodyText.normalTextReg_16px}
`;

export const TopInputCon = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-bottom: 10px;

@media ${breakpoints.minDog} {
flex-direction: row;
justify-content: space-between;
}
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
  border: 2px solid ${colors.green_succes};
  border-radius: 5px;
}

&::placeholder{
    padding-left: 15px;
}

@media ${breakpoints.minDog} {
width: 100%;
}
`;

export const ImgInput = styled.input`
width: 100%;
height: 50px;
background: #FFFFFF;
border-radius: 5px;
border: none;
padding: 15px 0 15px 0;
${bodyText.normalTextReg_16px}
outline: none;
margin: 5px 0 5px 0;
align-self: inherit;

&::placeholder{
    padding-left: 15px;
}

@media ${breakpoints.minDog} {
align-self: flex-end;
width: 150px;
margin-left: 5px;
}
`;

export const TextArea = styled.textarea`
margin-bottom: 10px;
margin-top: 5px;
${bodyText.normalTextReg_16px}
padding: 5px 5px 5px 5px;
width: 100%;
outline: none;
border-radius: 5px;

&:valid {
  border: 2px solid ${colors.green_succes};
  border-radius: 5px;
}

@media ${breakpoints.minDog} {
    width: 100%;
}
`;

export const SubmitContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
@media ${breakpoints.minDog} {
justify-content: flex-end;
}
`;