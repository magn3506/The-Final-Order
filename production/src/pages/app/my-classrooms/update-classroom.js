import React, {useRef, useState, useEffect} from 'react';
import Button from "../../../components/app/atoms/submit_button";
import {colors} from "../../../styles/global/colors";
import { local_server_path } from "../../../global_variables";
import { navigate } from "gatsby";
import Layout from "../../../components/app/layout/layout";
import InfoSection from '../../../components/app/molecules/info_section';
import IsPrivate from '../../../components/app/atoms/is_private/is_private';
import {Wrapper, Container, CloseIcon, Form, Label, TopInputCon, Input, ImgInput, TextArea, SubmitContainer, CloseIconCon, LabelDescription} from './create_classroom_styles';


const UpdateClassroom = ({location}) => {
    const form = useRef(null);
    const classroomData = location.state.classroom;
    console.log(classroomData);

    const [classroomTitle, setClassroomTitle] = useState({title: classroomData.title});
    const [classroomDescription, setClassroomDescription] = useState({description: classroomData.description});


    const onSubmit = e => {
        e.preventDefault();
        const formData = new FormData(form.current);
        fetch(local_server_path + `/private/api/classrooms/update-classroom.php?classroom_id=${classroomData.id}`, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
        .catch(error => console.error("Error:", error))
        .then(response => {
            console.log("The response is: ", response);
            navigate("/app/my-classrooms/classroom-edit", {state: {classroom_id: classroomData.id}});
        });
    }

    const handleTitleChange = (e) => {
        setClassroomTitle({title: e.target.value});
    }

      const handleDescriptionChange = (e) => {
        setClassroomDescription({description: e.target.value});
    }

    return (
        <Layout page_title="Update Classroom">
        <Wrapper>
            <Container>
                <InfoSection 
                title="Need to update your Classroom?"
                description="Remember to be descriptive of what your classroom is about. Thanks for using our application."
                />
                <Form ref={form} onSubmit={e => onSubmit(e)}>
                    <TopInputCon>
                        <Label> Classroom Name *
                            <Input onChange={e => handleTitleChange(e)} value={classroomTitle.title}  name="title" required placeholder="Fx. Math for beginners (Required)"></Input>
                        </Label>
                        <ImgInput name="image" placeholder="Upload image"></ImgInput>
                    </TopInputCon>
                    <Label> Description *
                    <LabelDescription>What can your students expect to learn in your classroom.</LabelDescription>
                    <TextArea required onChange={e => handleDescriptionChange(e)} value={classroomDescription.description} name="description" rows="7" cols="75" placeholder="fx. In this class we weil teach you the fundamentals of math. We will cover topics like multiplying and divition."/>
                    </Label>
                    <IsPrivate />
                    <SubmitContainer>
                        <Button type="button" onClick={() => navigate("/app/my-classrooms")} border="true" name="Cancel"/>
                        <Button border="false" type="submit" name="Update"/>
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

export default UpdateClassroom;
