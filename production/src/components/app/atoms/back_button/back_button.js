import React from 'react';
import styled from 'styled-components';
import {colors} from '../../../../styles/global/colors';
import {bodyText} from '../../../../styles/global/typography';
import { FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "gatsby";

const Button = styled.div`
background: ${colors.orange};
border-radius: 5px;
width: 112px;
height: 60px;
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
`;

const BackIcon = styled(FiArrowLeftCircle)`
width: 100%;
`;

const Text = styled.p`
${bodyText.normalTextReg_16px}
color: ${colors.white};
padding-right: 15px;
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
