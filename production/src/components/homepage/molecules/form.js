import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { local_server_path } from "../../../global_variables";

import Input from "../atoms/input";
import Button from "../atoms/create_acc_button";
import {Wrapper, Form, Text, Title, Link, GoogleButton} from "./form_styles";

const form = () => {
    return (
        <Wrapper>
            <Form action={local_server_path + "/private/api/users/create-user.php"} method="POST">
                <Title>Sign up for free</Title>
                <GoogleButton>
                    <FcGoogle class="icon" color="#b000b5" size="1.5em" /> Sign up with Google
                </GoogleButton>
                <Text>Or</Text>
                <Input placeholder="Username" name="user_name" type="text"></Input>
                <Input placeholder="Email" name="email" type="text"></Input>
                <Input placeholder="Password" name="password" type="password"></Input>
                <Button name="Create account"/>
                <Text>Already a menber? <Link href="www.google.com">Login</Link></Text>
            </Form>
        </Wrapper>
        //WHEN PRESSING LOGIN LINK CHANGE WRAPPER CONTENT WITH TERNARY OPERATOR  
    )
}

export default form;
