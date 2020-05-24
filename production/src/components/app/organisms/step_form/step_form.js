import React, {useRef} from 'react';
import Button from "../../atoms/submit_button";
import {colors} from "../../../../styles/global/colors";
import InfoSection from '../../molecules/info_section';
import {Wrapper, Container, CloseIcon, Form, Label, Input, TextArea, SubmitContainer, CloseIconCon, LabelDescription} from './step_form_styles';
import StepGeneralSection from '../../molecules/step_general_section/step_general_section';
import StepTheorySection from '../../molecules/step_theory_section/step_theory_section';
import StepQuizSection from '../../molecules/step_quiz_section/step_quiz_section';


const StepForm = ({isShowing, hide, showLecture, AddSteps}) => {
    const form = useRef(null);

    const onSubmitStepForm = e => {
        e.preventDefault();
        console.log("submit");

        const dataOBJ = {}
        const formData = new FormData(form.current);
        for (let name of formData.keys()) {
          const input = name;
          const value = formData.get(name);
          console.log('value:',input,": ", value);
          dataOBJ[input] = value;
        }

        console.log(dataOBJ);

        //ADD STEP
        AddSteps(dataOBJ);

        //GO BACK TO LECTURE FORM
        showLecture();
    }

    return (
        isShowing ? 
        ( <Wrapper>
            <Container>
                <InfoSection
                title="What is a step?"
                description="Steps are the steps the user needs to go through to complete your lecture A steps consists of theory and a quiz about the theory."
                />
                <Form ref={form} onSubmit={e => onSubmitStepForm(e)}>
                    <StepGeneralSection />
                    <StepTheorySection />
                    <StepQuizSection />
                    <SubmitContainer>
                        <Button type="button" onClick={hide} border="true" name="Cancel"/>
                        <Button border="false" type="submit" name="Create"/>
                    </SubmitContainer>
                    <CloseIconCon>
                        <CloseIcon onClick={showLecture} color={colors.white} size="1.5em"/>
                    </CloseIconCon>
                </Form>
            </Container>
        </Wrapper>) : null
    )
}

export default StepForm;
