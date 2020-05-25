import styled from 'styled-components';
import {colors} from '../../../../styles/global/colors';
import {bodyText} from '../../../../styles/global/typography';

export const Container = styled.div`
background: ${colors.white};
border-radius: 3px;
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
height: 56px;
margin-bottom: 5px;
`;

export const Title = styled.h3`
color: ${colors.dark_dark_purple};
${bodyText.normalTextBold_16px}
padding-left: 15px;
`;

export const Button = styled.button`
background: ${colors.orange};
color: ${colors.white};
padding: 7px 45px 7px 45px;
border-radius: 3px;
border: none;
transition: .3s;
cursor: pointer;
${bodyText.smallTextBold_13px}
margin-right: 15px;

&:hover {
    opacity: .8;
}
`;