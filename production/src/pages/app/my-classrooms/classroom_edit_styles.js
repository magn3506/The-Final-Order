import styled from 'styled-components';
import {colors} from '../../../styles/global/colors';
import {headings, bodyText} from '../../../styles/global/typography';

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
border: 5px dashed ${colors.grey};
display: flex;
flex-direction: row;
justify-content: space-between;
`;

export const CreateLectureButtonText = styled.h2`
${headings.heading4_24px};
color: ${colors.dark_dark_purple};
`;