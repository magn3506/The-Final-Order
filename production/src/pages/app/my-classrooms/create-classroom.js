import React, {useRef} from 'react';
import Button from "../../../components/app/atoms/submit_button";
import {colors} from "../../../styles/global/colors";
import { local_server_path } from "../../../global_variables";
import { navigate } from "gatsby";
import Layout from "../../../components/app/layout/layout";
import InfoSection from '../../../components/app/molecules/info_section';
import IsPrivate from '../../../components/app/atoms/is_private/is_private';
import {Wrapper, Container, CloseIcon, Form, Label, TopInputCon, Input, ImgInput, TextArea, SubmitContainer, CloseIconCon, LabelDescription} from './create_classroom_styles';


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
                    <LabelDescription>What can your students expect to learn in your classroom.</LabelDescription>
                    <TextArea required name="description" rows="7" cols="75" placeholder="fx. In this class we weil teach you the fundamentals of math. We will cover topics like multiplying and divition."/>
                    </Label>
                    <IsPrivate />
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

export default CreateClassroom;
