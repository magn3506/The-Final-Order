import React from 'react';
import {RadioButton, LabelRadioButton, Description, RadioContainer} from './is_private_styles';

const IsPrivate = () => {
    return (
        <RadioContainer>
            <Description>Who can join your classroom?</Description>
            <RadioButton type="radio" name="is_private" value="0" />
            <LabelRadioButton htmlFor="public">Public (Anyone)</LabelRadioButton>
            <RadioButton type="radio" name="is_private" value="1" />
            <LabelRadioButton htmlFor="private">Private (Only invited members)</LabelRadioButton>
        </RadioContainer>
    )
}

export default IsPrivate;
