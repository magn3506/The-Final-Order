import React from 'react';
import styled from 'styled-components';
import {colors} from '../../../../styles/global/colors';
import {bodyText} from '../../../../styles/global/typography';
import {breakpoints} from '../../../../styles/global/breakpoints';
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "gatsby";

const Button = styled.div`
background: ${colors.orange};
border-radius: 5px;
width: 75px;
height: 40px;
border: none;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
cursor: pointer;
transition: .3s;
&:hover{
    opacity: .8;
}

@media ${breakpoints.minDog} {
width: 112px;
height: 60px;
}
`;

const BackIcon = styled(FiArrowLeftCircle)`
width: 25%;
padding-right: 5px;

@media ${breakpoints.minDog} {
width: 100%;
padding-right: 0;
}
`;

const Text = styled.p`
${bodyText.smallTextReg_13px}
color: ${colors.white};
padding-right: 5px;

@media ${breakpoints.minDog} {
padding-right: 15px;
${bodyText.normalTextReg_16px}
}
`;

const BackLink = styled(Link)`
text-decoration: none;
`;

const BackButton = props => {
    return (
        <div>
            <BackLink to={props.linkRoute}>
                <Button>
                        <BackIcon color={colors.white} size="1.5em"/>
                        <Text>{props.name}</Text>
                </Button>
            </BackLink>
        </div>
    )
}

export default BackButton;
