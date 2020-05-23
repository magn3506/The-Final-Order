import React, {useRef} from 'react';
import { navigate } from "gatsby";
import Button from "../../atoms/submit_button";
import {colors} from "../../../../styles/global/colors";
import Layout from "../../layout/layout";
import InfoSection from '../../molecules/info_section';
import {Wrapper, Container, CloseIcon, Form, Label, Input, TextArea, SubmitContainer, CloseIconCon, LabelDescription} from './step_form_styles';
import StepGeneralSection from '../../molecules/step_general_section/step_general_section';
import StepTheorySection from '../../molecules/step_theory_section/step_theory_section';


const StepForm = props => {
    const form = useRef(null);

    const onSubmit = e => {
        console.log("submit");
    }

    return (
        <Layout page_title="Create Lecture">
        <Wrapper>
            <Container>
                <InfoSection
                title="What is a step?"
                description="Steps are the steps the user needs to go through to complete your lecture A steps consists of theory and a quiz about the theory."
                />
                <Form ref={form} onSubmit={e => onSubmit(e)}>
                    <StepGeneralSection />
                    <StepTheorySection />
                    <SubmitContainer>
                        <Button type="button" onClick={() => navigate("/app/my-classrooms")} border="true" name="Cancel"/>
                        <Button border="false" type="submit" name="Create"/>
                    </SubmitContainer>
                    <CloseIconCon>
                        <CloseIcon onClick={() => navigate('/app/my-classrooms')} color={colors.white} size="1.5em"/>
                    </CloseIconCon>
                </Form>
            </Container>
        </Wrapper>
        </Layout>
    )
}

export default StepForm;
