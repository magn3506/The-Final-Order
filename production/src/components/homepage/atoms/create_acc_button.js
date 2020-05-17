import React from 'react';
import {Button} from "./create_acc_button_styles";

const create_acc_button = props => {
    return (
        <div>
            <Button>{props.name}</Button>
        </div>
    )
}

export default create_acc_button
