import React from 'react';
import ReactDOM from 'react-dom';
import {Overlay} from "./form_styles";

import Login from "./login_form";
import Signup from "./signup_form";

// https://upmostly.com/tutorials/modal-components-react-custom-hooks - createPortal reference
const userForm = ({isRegistered, isShowing, hide, isRegisteredEventHandler, isNotRegisteredEventHandler}) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        {isRegistered ? <Signup loginCall={isRegisteredEventHandler} hide={hide} /> : <Login SignupCall={isNotRegisteredEventHandler} hide={hide} />}
        <Overlay />      
    </React.Fragment>, document.body
    ) : null;

export default userForm;