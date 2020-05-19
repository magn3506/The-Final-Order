import React from 'react';
import ReactDOM from "react-dom";
import { local_server_path } from "../../../global_variables";
import {colors} from "../../../styles/global/colors";
import { FcGoogle } from "react-icons/fc";
import {Wrapper, Form, Text, Title, Link, GoogleButton, CloseIcon, Overlay} from "./form_styles";
import Input from "../atoms/input";
import Button from "../atoms/submit_button";

const googleAlert = () => {
    alert("Not implemented yet :-)");
}

// https://upmostly.com/tutorials/modal-components-react-custom-hooks - createPortal reference
const Login = ({isShowing, hide, showSignup}) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <Wrapper>
            <Form action={local_server_path + "/private/api/users/login.php"} method="POST">
            <Title>Login</Title>
            <GoogleButton onClick={googleAlert}>
                <FcGoogle class="icon" color="#b000b5" size="1.5em" /> Sign up with Google
            </GoogleButton>
            <Text>Or</Text>
            <Input placeholder="Email" name="email" type="text"></Input>
            <Input placeholder="Password" name="password" type="password"></Input>
            <Button name="Login"/>
            <Link linkColor="#8C4A6E" href="www.google.com">Forgot your password?</Link>
            <Text>Not a member yet? <Link onClick={showSignup}>Sign up</Link></Text>
            <CloseIcon onClick={hide} color={colors.orange} size="1.5em"/>
            </Form>
        </Wrapper> 
        <Overlay /> 
        </React.Fragment>, document.body
    ) : null;

export default Login;


/* // https://upmostly.com/tutorials/modal-components-react-custom-hooks - createPortal reference
const Login = ({isShowing, hide}) => isShowing ? ReactDOM.createPortal(
    <React.Fragment>
        <Wrapper>
            <Form>
            <Title>Login</Title>
            <GoogleButton onClick={googleAlert}>
                <FcGoogle class="icon" color="#b000b5" size="1.5em" /> Sign up with Google
            </GoogleButton>
            <Text>Or</Text>
            <Input placeholder="Email" name="email" type="text"></Input>
            <Input placeholder="Password" name="password" type="password"></Input>
            <Button name="Login"/>
            <Link linkColor="#8C4A6E" href="www.google.com">Forgot your password?</Link>
            <Text>Not a member yet? <Link href="www.google.com">Sign up</Link></Text>
            <CloseIcon onClick={hide} color={colors.orange} size="1.5em"/>
            </Form>
        </Wrapper>   
        <Overlay />      
    </React.Fragment>, document.body
    ) : null; */