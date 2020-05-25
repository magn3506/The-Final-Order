import React from 'react';
import {Container, TitleCon, Title, Number, Label, Input, } from './step_general_section_styles';

const StepGeneralSection = () => {
    return (
        <Container>
            <TitleCon>
                <Number>1</Number>
                <Title>General</Title>
            </TitleCon>
            <Label> Name your step *
                <Input name="title" required placeholder="Fx. Algebraic Expressions"></Input>
            </Label>
        </Container>
    )
}

export default StepGeneralSection;
