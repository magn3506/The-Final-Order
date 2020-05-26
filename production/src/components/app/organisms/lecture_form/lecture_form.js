import React, {useRef, useState} from 'react'
import { navigate, Link } from "gatsby";
import { local_server_path } from '../../../../global_variables'
import Button from "../../atoms/submit_button";
import {colors} from "../../../../styles/global/colors";
import InfoSection from '../../molecules/info_section';
import {Wrapper, Container, CloseIcon, Form, Label, Input, TextArea, SubmitContainer, CloseIconCon, LabelDescription} from '../../../../pages/app/lecture/create_lecture_styles';
import LectureStepsList from "../../molecules/lecture_steps_list/lecture_steps_list";
import ErrorModal from '../../atoms/error_modal/error_modal';

const LectureForm = ({isShowing, showStep, steps, handleTitleChange, handleDescriptionChange, description, title, classroomID}) => {
    const form = useRef(null);
    const [error, setError] = useState(false);

    //Trasnform steps array into string
    const stepsStringARR = JSON.stringify(steps);

    const onSubmit = e => {
        e.preventDefault();
        if(steps.length === 0){
            console.log("NO STEPS ADDED");
            setError(!error);
        }else{
            console.log("STEPS ADDED", steps);
            const formData = new FormData(form.current);
            fetch(local_server_path + `/private/api/lectures/create-lecture.php`, {
                method: 'POST',
                body: formData
            }).then(res => res)
            .catch(error => console.error("Error:", error))
            .then(response => {
                console.log(formData);
                console.log("Success:", response);
                navigate("/app/my-classrooms/classroom-edit", {state: {classroom_id: classroomID}});
            });
        }
    }

    const closeErrorMsg = () => {
        setError(!error);
    }

    const handleCancel = () => {
        console.log("CANCEL");
        navigate("/app/my-classrooms");

    }

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
                    <Input value={title.title} onChange={e => handleTitleChange(e)} name="title" required placeholder="Fx. Basic Algebra"></Input>
                </Label>
                <Label> Description *
                <LabelDescription>What will this specific lecture teach your students in your classroom?</LabelDescription>
                <TextArea value={description.description} onChange={e => handleDescriptionChange(e)} required name="description" rows="7" cols="75" placeholder="Fx. In this lecture we will be learning about basic algebra. We will talk about negative numbers for a foundation stand point and be a quiz about algebraic expressions."/>
                </Label>
                <Label> Create steps 
                <LabelDescription>You’ll need to create steps in order to complete your lecture.</LabelDescription>
                </Label>
                <LectureStepsList steps={steps} showStep={showStep}/>
                <input value={stepsStringARR} name="steps" type="hidden"></input>
                <input value={classroomID} name="classroom_id" type="hidden"></input>
                <SubmitContainer>
                    <Link to="/app/my-classrooms">
                        <Button type="button" border="true" name="Cancel"/>
                    </Link>
                    <Button border="false" type="submit" name="Create"/>
                </SubmitContainer>
                <CloseIconCon>
                    <CloseIcon onClick={() => navigate("/app/my-classrooms")} color={colors.white} size="1.5em"/>
                </CloseIconCon>
                {error ? <ErrorModal closeErrorMsg={closeErrorMsg} errorMsg="You need to add steps."></ErrorModal> : null}
            </Form>
        </Container>
    </Wrapper>) : null
    )
}

export default LectureForm;
