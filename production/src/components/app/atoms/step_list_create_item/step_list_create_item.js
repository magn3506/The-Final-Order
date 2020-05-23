import React from 'react';
import {navigate} from 'gatsby';
import {Container, Title, Button} from './step_list_create_item_styles';


const StepListCreateItem = props => {
    return (
        <Container>
            <Title>Create step</Title>
            <Button /* onClick={props => navigate("/app/steps/edit-step", {state: {lecture_ID: props.lecture_ID}})} */>Add</Button>
        </Container>
    )
}

export default StepListCreateItem;
