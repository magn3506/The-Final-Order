import React from 'react';
import styled from 'styled-components';
import StepListItem from "../../atoms/step_list_item/step_list_item";
import StepListCreateItem from '../../atoms/step_list_create_item/step_list_create_item';
import {colors} from '../../../../styles/global/colors';
import {headings} from '../../../../styles/global/typography';

const Wrapper = styled.div`
width: 100%;
margin-top: 10px;
margin-bottom: 20px;
`;

const StepItemCon = styled.div`
display: flex;
flex-direction: row;
`;

const StepNumber = styled.div`
display: flex;
justify-content: center;
align-items: center;
color: ${colors.sand};
${headings.heading4_24px}
padding: 15px;
`;

const LectureStepsList = ({showStep, steps}) => {
    console.log("LISTED STEPS: ", steps);
    const lastIndex = steps.length - 1;
    return (
        <Wrapper>
            {
               steps === [] ? null : steps.map((step, index) => {
                    return (
                    <StepItemCon key={index}>
                        <StepNumber>{index + 1}</StepNumber>
                        <StepListItem title={step.title} />
                    </StepItemCon>
                    )
                })
            }
            <StepItemCon>
                <StepNumber>{lastIndex + 2}</StepNumber>
                <StepListCreateItem showStep={showStep}/>
            </StepItemCon>
        </Wrapper>
    )
}

export default LectureStepsList;
