import styled from 'styled-components';
import {colors} from '../../../../styles/global/colors';
import {bodyText} from '../../../../styles/global/typography';
import { IoIosClose } from "react-icons/io";

export const Container = styled.div`
position: relative;
width: 375px;
height: 150px;

background: ${colors.white};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const Wrapper = styled.div`
position: absolute;
top: 45%;
left: 15%;
`;

export const Title = styled.h3`
color: ${colors.red_error};
${bodyText.mediumTextBold_20px};
margin-bottom: 5px;
`;

export const Message = styled.p`
${bodyText.mediumTextBold_20px};
color: ${colors.dark_purple};
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