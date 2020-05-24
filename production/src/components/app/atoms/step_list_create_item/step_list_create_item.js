import React from 'react';
import {navigate} from 'gatsby';
import {Container, Title, Button} from './step_list_create_item_styles';


const StepListCreateItem = ({showStep}) => {
    return (
        <Container>
            <Title>Create step</Title>
            <Button onClick={showStep}>Add</Button>
        </Container>
    )
}

export default StepListCreateItem;
