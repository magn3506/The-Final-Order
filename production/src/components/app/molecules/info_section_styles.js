import styled from 'styled-components';
import {colors} from "../../../styles/global/colors";
import {headings, bodyText} from "../../../styles/global/typography";

export const InfoSection = styled.div`
background: ${colors.super_dark_purple};
width: 300px;
padding: 15px;
display: flex;
flex-direction: column;
align-content: center;
border-radius: 5px 0 0 5px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Title = styled.h3`
color: ${colors.sand};
${headings.heading4_24px}
margin-bottom: 10px;
`;

export const Text = styled.p`
color: ${colors.light_grey};
${bodyText.normalTextReg_16px}
line-height: 1.5;
`;

export const LogoIcon = styled.img`
width: 75px;
height: 75px;
`;

export const LogoCon = styled.div`
width: 100%;
display: flex;
justify-content: center;
margin-bottom: 10px;
`;