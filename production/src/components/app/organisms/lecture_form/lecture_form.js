import React, {useRef} from 'react'
import { navigate } from "gatsby";
import Button from "../../atoms/submit_button";
import {colors} from "../../../../styles/global/colors";
import InfoSection from '../../molecules/info_section';
import {Wrapper, Container, CloseIcon, Form, Label, Input, TextArea, SubmitContainer, CloseIconCon, LabelDescription} from '../../../../pages/app/lecture/create_lecture_styles';
import LectureStepsList from "../../molecules/lecture_steps_list/lecture_steps_list";

const LectureForm = ({isShowing, showStep, onSubmit, steps}) => {
    const form = useRef(null);

    return (
        isShowing ? 
        (<Wrapper>
        <Container>
            <InfoSection
            title="What is a Lecture?"
            description="Lectures are a subject in a specific field. An example could be in Psychology, that a subject or lecture would be about social behaviour."
            />
            <Form ref={form} onSubmit={e => onSubmit(e)}>
                <Label> Lecture title *
                    <Input name="title" required placeholder="Fx. Basic Algebra (Require)"></Input>
                </Label>
                <Label> Description *
                <LabelDescription>What will this specific lecture teach your students in your classroom?</LabelDescription>
                <TextArea required name="description" rows="7" cols="75" placeholder="Fx. In this lecture we will be learning about basic algebra. We will talk about negative numbers for a foundation stand point and be a quiz about algebraic expressions."/>
                </Label>
                <Label> Create steps 
                <LabelDescription>You’ll need to create steps in order to complete your lecture.</LabelDescription>
                </Label>
                <LectureStepsList steps={steps} showStep={showStep}/>
                <SubmitContainer>
                    <Button type="button" onClick={() => navigate("/app/my-classrooms")} border="true" name="Cancel"/>
                    <Button onClick={e => onSubmit(e)} border="false" type="submit" name="Create"/>
                </SubmitContainer>
                <CloseIconCon>
                    <CloseIcon onClick={() => navigate("/app/my-classrooms")} color={colors.white} size="1.5em"/>
                </CloseIconCon>
            </Form>
        </Container>
    </Wrapper>) : null
    )
}

export default LectureForm;
