import React, {useRef} from 'react';
import styled from "styled-components";
import {colors} from "../../../styles/global/colors";
import {headings, bodyText} from "../../../styles/global/typography";
import Button from "../../../components/app/atoms/submit_button";
import { local_server_path } from "../../../global_variables";
import { navigate } from "gatsby";
import Layout from "../../../components/app/layout/layout";
import InfoSection from '../../../components/app/molecules/info_section';
import IsPrivate from '../../../components/app/atoms/is_private/is_private';

const Wrapper = styled.div`
width: 100%;
display: flex; 
justify-content: center;
`;

const Container = styled.div`
display: flex;
flex-direction: row;
`;


const Form = styled.form`
background: ${colors.dark_dark_purple};
padding: 25px;
border-radius: 0px 5px 5px 0;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Label = styled.label`
color: ${colors.sand};
display: flex;
flex-direction: column;
${bodyText.normalTextBold_16px}
`;

const TopInputCon = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 10px;
`;

const Input = styled.input`
width: 300px;
background: #FFFFFF;
border-radius: 5px;
border: none;
padding: 15px 0 15px 0;
${bodyText.normalTextReg_16px}
outline: none;
margin: 5px 0 5px 0;

&:valid {
  outline: 2px solid ${colors.green_succes};
}

&::placeholder{
    padding-left: 15px;
}
`;

const ImgInput = styled.input`
width: 245px;
height: 50px;
background: #FFFFFF;
border-radius: 5px;
border: none;
padding: 15px 0 15px 0;
${bodyText.normalTextReg_16px}
outline: none;
margin: 5px 0 5px 0;
align-self: flex-end;

&::placeholder{
    padding-left: 15px;
}
`;

const TextArea = styled.textarea`
margin-bottom: 10px;
margin-top: 5px;
${bodyText.normalTextReg_16px}
padding: 5px 5px 5px 5px;
width: 555px;
outline: none;
`;

const SubmitContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: flex-end;
`;

const CreateClassroom = () => {
    const form = useRef(null);

    const onSubmit = e => {
        let cookieId = document.cookie.replace(/(?:(?:^|.*;\s*)userID\s*\=\s*([^;]*).*$)|^.*$/, "$1");
        console.log(cookieId);
        e.preventDefault();
        const formData = new FormData(form.current);
        fetch(local_server_path + `/private/api/classrooms/create-classroom.php?id=${cookieId}`, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
        .catch(error => console.error("Error:", error))
        .then(response => {
            console.log("The id is:  ", response);
            const id = response;
            console.log(id);
            navigate("/app/my-classrooms/classroom-edit", {state: {classroom_id: id}});
        });
    }

    return (
        <Layout page_title="Edit Classroom">
        <Wrapper>
            <Container>
                <InfoSection 
                title="What is a Classroom?"
                description="A classroom is where your lectures live. An example of a classroom could be a classroom called Math and would teach you the fundamentals of mathematics."
                />
                <Form ref={form} onSubmit={e => onSubmit(e)}>
                    <TopInputCon>
                        <Label> Classroom Name *
                            <Input name="title" required placeholder="Fx. Math for beginners (Required)"></Input>
                        </Label>
                        <ImgInput name="image" placeholder="Upload image"></ImgInput>
                    </TopInputCon>
                    <Label> Description *
                    <TextArea required name="description" rows="10" cols="75" placeholder="fx. In this class we weil teach you the fundamentals of math. We will cover topics like multiplying and divition."/>
                    </Label>
                    <IsPrivate />
                    <SubmitContainer>
                        <Button border="true" name="Cancel"/>
                        <Button border="false" type="submit" name="Create"/>
                    </SubmitContainer>
                </Form>
            </Container>
        </Wrapper>
        </Layout>
    )
}

export default CreateClassroom;
