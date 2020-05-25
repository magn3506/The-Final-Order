import React from 'react';
import {Container, TitleCon, Title, Number, Label, Input, LabelDescription, RadioButton, OptionCon} from './step_quiz_section_styles';

const StepQuizSection = () => {
    return (
        <Container>
            <TitleCon>
                <Number>3</Number>
                <Title>Quiz</Title>
            </TitleCon>
            <Label> Type a question 
                <LabelDescription>This is the question you want them to answer. This should relate to the theory above.</LabelDescription>
                <Input name="question" required placeholder="Fx. Why is it called Algebraic Expressions"></Input>
            </Label>
            <Label> Type answer options &amp; choose a right answer 
                <LabelDescription>Here you need to type different answer options for the above question. One must be the correct answer.</LabelDescription>
                <OptionCon>
                    <RadioButton type="radio" required name="isCorrect" value="option1" />
                    <Input name="option1" required placeholder="Type an answer option here. Fx. 2 plus 2 is four."></Input>
                </OptionCon>
                <OptionCon>
                    <RadioButton type="radio" required name="isCorrect" value="option2" />
                    <Input name="option2" required placeholder="Type an answer option here. Fx. 2 plus 2 is four."></Input>
                </OptionCon>
                <OptionCon>
                    <RadioButton type="radio" required name="isCorrect" value="option3" />
                    <Input name="option3" required placeholder="Type an answer option here. Fx. 2 plus 2 is four."></Input>
                </OptionCon>
                <OptionCon>
                    <RadioButton type="radio" required name="isCorrect" value="option4" />
                    <Input name="option4" required placeholder="Type an answer option here. Fx. 2 plus 2 is four."></Input>
                </OptionCon>
            </Label>
        </Container>
    )
}

export default StepQuizSection;
