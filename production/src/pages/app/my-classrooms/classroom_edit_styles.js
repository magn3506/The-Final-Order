import styled from 'styled-components';
import {colors} from '../../../styles/global/colors';
import {headings, bodyText} from '../../../styles/global/typography';
import { GrAddCircle } from "react-icons/gr";
import { MdDeleteForever } from 'react-icons/md';
import { IoIosCloseCircle } from 'react-icons/io';
import { FiEdit } from 'react-icons/fi';
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

export const EditLectureButtonCon = styled.div`
width: 100%;
border-radius: 35px;
background: ${colors.dark_dark_purple};
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 65px;
`;

export const EditLectureButtonText = styled.h2`
${bodyText.smallTextBold_13px};
color: ${colors.sand};
margin-left: 10px;

@media ${breakpoints.minDog} {
${headings.heading5_18px};
}
`;

export const EditLectureButton = styled.button`
background: ${colors.orange};
border: none;
border-radius: 25px;
padding: 12px;
margin-right: 5px;
cursor: pointer;
transition: .3s;
${bodyText.smallTextBold_13px};
color: ${colors.white};
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
export const CloseIcon = styled(IoIosCloseCircle)`
margin-right: 0;
color: ${colors.orange};
position: absolute;
top: 5px;
right: 5px;
cursor: pointer;
transition: .3s;

&:hover{
    opacity: .8;
}

@media ${breakpoints.minDog} {
    margin-right: 5px;
}
`;

export const RemoveIcon = styled(MdDeleteForever)`
margin-right: 0;
cursor: pointer;
transition: .3s;
color: ${colors.red_error};

&:hover {
    opacity: .8;
}

@media ${breakpoints.minDog} {
    margin-right: 5px;
}
`;

export const RemoveItemModalWrapper = styled.div`
position: absolute;
top: 35%;
left: 0;
width: 100%;
height: 250px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
z-index: 1;

@media ${breakpoints.minDog} {
left: 20%;
width: 500px;
}

@media ${breakpoints.minWolf} {
left: 42%;
width: 500px;
}
`;
export const RemoveItemModalCon = styled.div`
position: relative;
background: ${colors.white};
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

export const RemoveItemModalTitle = styled.h2`
text-align: center;
${headings.heading5_18px};

@media ${breakpoints.minDog} {
left: 42%;
width: 500px;
${headings.heading4_24px};
}
`;

export const RemoveItemModalButton = styled.button`
background: ${colors.orange};
padding: 15px;
border: none;
border-radius: 5px;
color: ${colors.white};
cursor: pointer;
transition: .3s;
margin-top: 10px;

&:hover {
    opacity: .8;
}
`;

export const EditButtonsCon = styled.div`
display: flex;
flex-direction: row;
align-items: center;
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

export const RemoveButton = styled.div`
position: absolute;
bottom: 7px;
right: 5px;
background: ${colors.red_error};
color: ${colors.white};
padding: 5px;
display: flex;
align-items: center;
border-radius: 3px;
cursor: pointer;
transition: .3s;
${bodyText.smallTextBold_13px}

&:hover {
    opacity: .8;
}

@media ${breakpoints.minDog} {
right: 170px;
}
`;

export const ClassroomDetailsWrapper = styled.div`
position: relative;
`;

export const EditClassroomIcon = styled(FiEdit)`
margin-right: 20px;

&:hover {
    opacity: .8;
}
`;

export const EditClassroomButton = styled.div`
position: absolute;
bottom: 7px;
right: 75px;
background: ${colors.sand};
color: ${colors.dark_dark_purple};
padding: 5px;
display: flex;
align-items: center;
border-radius: 3px;
cursor: pointer;
transition: .3s;
${bodyText.smallTextBold_13px}

&:hover {
    opacity: .8;
}

@media ${breakpoints.minDog} {
right: 245px;
}
`;