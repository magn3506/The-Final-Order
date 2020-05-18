import React from 'react';
import { FcGoogle } from "react-icons/fc";
import {colors} from "../../../styles/global/colors";
import { local_server_path } from "../../../global_variables";
import {Wrapper, Form, Text, Title, Link, GoogleButton, CloseIcon} from "./form_styles";

import Input from "../atoms/input";
import Button from "../atoms/submit_button";

const googleAlert = () => {
    alert("Not implemented yet :-)");
}

const Signup = props => {
    return (
        <Wrapper>
            <Form action={local_server_path + "/private/api/users/create-user.php"} method="POST">
                <Title>Sign up for free</Title>
                <GoogleButton onClick={googleAlert}>
                    <FcGoogle class="icon" color="#b000b5" size="1.5em" /> Sign up with Google
                </GoogleButton>
                <Text>Or</Text>
                <Input placeholder="Username" name="user_name" type="text"></Input>
                <Input placeholder="Email" name="email" type="text"></Input>
                <Input placeholder="Password" name="password" type="password"></Input>
                <Button name="Create account"/>
                <Text>Already a menber? <Link>Login</Link></Text>
                <CloseIcon onClick={props.hide} color={colors.orange} size="1.5em"/>
            </Form>
        </Wrapper>
    );
}
    


export default Signup;
