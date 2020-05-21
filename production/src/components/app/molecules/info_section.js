import React from 'react';
import {InfoSection, Title, Text, LogoIcon, LogoCon} from './info_section_styles';
import LogoIconSrc from "../../../assets/icons/Info_owl_icon.png";


const InfoSectionComp = props => {
    return (
        <InfoSection>
            <LogoCon>
                <LogoIcon src={LogoIconSrc}/>
            </LogoCon>
            <Title>{props.title}</Title>
            <Text>{props.description}</Text>
        </InfoSection>
    )
}

export default InfoSectionComp;
