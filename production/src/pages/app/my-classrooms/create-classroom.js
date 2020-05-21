import React, {useRef} from 'react';
import styled from "styled-components";
import {colors} from "../../../styles/global/colors";
import {headings, bodyText} from "../../../styles/global/typography";
import Button from "../../../components/app/atoms/submit_button";
import { local_server_path } from "../../../global_variables";

const Wrapper = styled.div`
width: 100%;
display: flex; 
justify-content: center;
`;

const Container = styled.div`
display: flex;
flex-direction: row;
`;

const InfoSection = styled.div`
background: ${colors.super_dark_purple};
width: 300px;
padding: 15px;
`;

const Title = styled.h3`
color: ${colors.sand};
${headings.heading4_24px}
`;

const Text = styled.p`
color: ${colors.white};
${bodyText.normalTextReg_16px}
`;

const Form = styled.form`
background: ${colors.dark_dark_purple};
padding: 25px;
`;

const Label = styled.label`
color: ${colors.sand};
display: flex;
flex-direction: column;
${bodyText.normalTextBold_16px}
`;

const SubmitContainer = styled.div`
display: flex;
flex-direction: row;
`;

const RadioButton = styled.input`

`;

const LabelRadioButton = styled.label`
color: ${colors.white};
`;

const Description = styled.p`
color: ${colors.sand};
${bodyText.normalTextBold_16px}
`;

const RadioContainer = styled.div`
padding: 0 15px 15px 0;
`;

const CreateClassroom = () => {
    const form = useRef(null);

    const onSubmit = e => {
        e.preventDefault();
        const formData = new FormData(form.current);
        fetch(local_server_path + `/private/api/classrooms/create-classroom.php`, {
            method: 'POST',
            body: formData
        }).then(res => res)
        .catch(error => console.error("Error:", error))
        .then(response => {
            console.log("Succes! ", response);
        });
    }

    return (
        <Wrapper>
            <Container>
                <InfoSection>
                    <Title>What is a Classroom?</Title>
                    <Text>A classroom is where your lectures live.An example of a classroom could be a classroom called Math and would teach you the fundamentals of mathematics.</Text>
                </InfoSection>
                <Form ref={form} onSubmit={e => onSubmit(e)}>
                    <Label> Classroom Name *
                        <input name="title" placeholder="Fx. Math for beginners (Required)"></input>
                    </Label>
                    <input name="image" placeholder="Upload image"></input>
                    <Label> Description *
                    <textarea name="description" rows="10" cols="75" placeholder="fx. In this class we weil teach you the fundamentals of math. We will cover topics like multiplying and divition."/>
                    </Label>
                    <RadioContainer>
                        <Description>Who can join your classroom?</Description>
                        <RadioButton type="radio" name="is_private" value="0" />
                        <LabelRadioButton htmlFor="public">Public (Anyone)</LabelRadioButton>
                        <RadioButton type="radio" name="is_private" value="1" />
                        <LabelRadioButton htmlFor="private">Private (Only invited members)</LabelRadioButton>
                    </RadioContainer>
                    <SubmitContainer>
                        <Button name="Cancel"/>
                        <Button type="submit" name="Create"/>
                    </SubmitContainer>
                </Form>
            </Container>
        </Wrapper>
    )
}

export default CreateClassroom;
