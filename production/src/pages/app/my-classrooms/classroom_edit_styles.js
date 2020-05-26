import styled from 'styled-components';
import {colors} from '../../../styles/global/colors';
import {headings, bodyText} from '../../../styles/global/typography';
import { GrAddCircle } from "react-icons/gr";
import {breakpoints} from '../../../styles/global/breakpoints';

export const Wrapper = styled.div`
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  padding: 10px;
`;

export const LecturesTitle = styled.h2`
${headings.heading4_24px};
color: ${colors.purple};
margin-top: 15px;
`;

export const LecturesNumber = styled.span`
${headings.heading4_24px};
color: ${colors.orange};
`;

export const CreateLectureCon = styled.div`
width: 100%;
display: flex;
flex-direction: row;
margin-top: 15px;
`;

export const CreateLectureNumber = styled.div`
${headings.heading4_24px};
color: ${colors.dark_dark_purple};
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
`;

export const CreateLectureButtonCon = styled.div`
width: 100%;
border-radius: 35px;
border: 3px dashed ${colors.grey};
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 65px;
`;

export const CreateLectureButtonText = styled.h2`
${bodyText.smallTextBold_13px};
color: ${colors.dark_dark_purple};
margin-left: 10px;

@media ${breakpoints.minDog} {
${headings.heading5_18px};
}
`;

export const CreateLectureButton = styled.button`
background: ${colors.sand};
border: none;
border-radius: 25px;
padding: 12px;
margin-right: 5px;
cursor: pointer;
transition: .3s;
${bodyText.smallTextBold_13px};
display: flex;
justify-content: center;
align-items: center;
width: 50px;

&:hover {
    opacity: .8;
}

@media ${breakpoints.minDog} {
    margin-right: 10px;
    width: 125px;
}
`;

export const AddIcon = styled(GrAddCircle)`
margin-right: 0;

@media ${breakpoints.minDog} {
    margin-right: 5px;
}
`;

export const HelpContainer = styled.div`
background: ${colors.dark_dark_purple};
width: 100%;
padding: 65px 50px 50px 50px;
margin-top: 55px;
border-radius: 5px;
justify-content: center;
position: relative;
`;

export const Title = styled.h2`
color: ${colors.sand};
${headings.heading5_18px};
text-align: center;

@media ${breakpoints.minDog} {
${headings.heading4_24px};
}
`;

export const Feedback = styled.p`
color: ${colors.white};
${bodyText.smallTextReg_13px};
padding: 10px 0 0 0;

@media ${breakpoints.minDog} {
padding: 10px 50px 0 50px;
${bodyText.normalTextReg_16px};
}
`;

export const ImgOwl = styled.img`
width: 94px;
height: 79px;
position: absolute;
top: -25px;
left: 40%;

@media ${breakpoints.minDog} {
left: 45%;
}
`;