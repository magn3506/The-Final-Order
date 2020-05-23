import React from 'react';
import {Container, TitleCon, Title, Number, Label, LabelDescription, TextArea} from './step_theory_section_styles';

const StepTheorySection = () => {
    return (
        <Container>
            <TitleCon>
                <Number>2</Number>
                <Title>Theory</Title>
            </TitleCon>
            <Label> Insert theory 
                <LabelDescription>Give a detailed description of the theory behind your step. The theory should relate to the answer in the quiz.</LabelDescription>
                <TextArea required name="theoryText" rows="7" cols="75" placeholder="Fx. In this lecture we will be learning about basic algebra. We will talk about negative numbers for a foundation stand point and be a quiz about algebraic expressions."/>
            </Label>
        </Container>
    )
}

export default StepTheorySection;