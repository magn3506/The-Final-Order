import React from 'react';
import {Button} from "./submit_button_styles";

const SubmitButton = props => {
    return (
        <div>
            <Button border={props.border}>{props.name}</Button>
        </div>
    )
}

export default SubmitButton;
