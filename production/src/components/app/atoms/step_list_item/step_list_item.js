import React from 'react';
import {navigate} from 'gatsby';
import {Container, Title, Button} from './step_list_item_styles';


const StepListItem = props => {
    return (
        <Container>
            <Title>{props.title}</Title>
            <Button /* onClick={props => navigate("/app/steps/edit-step", {state: {lecture_ID: props.lecture_ID}})} */>Edit</Button>
        </Container>
    )
}

export default StepListItem;
