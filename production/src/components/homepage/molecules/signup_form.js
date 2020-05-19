import React from 'react';
import ReactDOM from "react-dom";
import { FcGoogle } from "react-icons/fc";
import {colors} from "../../../styles/global/colors";
import { local_server_path } from "../../../global_variables";
import {Wrapper, Form, Text, Title, Link, GoogleButton, CloseIcon, Overlay} from "./form_styles";

import Input from "../atoms/input";
import Button from "../atoms/submit_button";

const googleAlert = () => {
    alert("Not implemented yet :-)");
}

// https://upmostly.com/tutorials/modal-components-react-custom-hooks - createPortal reference
const Signup = ({isShowing, hide, showLogin}) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <Wrapper>
            <Form action={local_server_path + "/private/api/users/create-user.php"} method="POST">
                <Title>Sign up for free</Title>
                <GoogleButton onClick={googleAlert}>
                    <FcGoogle className="icon" color="#b000b5" size="1.5em" /> Sign up with Google
                </GoogleButton>
                <Text>Or</Text>
                <Input placeholder="Username" name="user_name" type="text"></Input>
                <Input placeholder="Email" name="email" type="text"></Input>
                <Input placeholder="Password" name="password" type="password"></Input>
                <Button name="Create account"/>
                <Text>Already a menber? <Link onClick={showLogin}>Login</Link></Text>
                <CloseIcon onClick={hide} color={colors.orange} size="1.5em"/>
            </Form>
        </Wrapper>
        <Overlay />
        </React.Fragment>, document.body
    ) : null;
    


export default Signup;
