import React, {useState, useRef} from 'react';
import ReactDOM from "react-dom";
import useFetch from "../../../hooks/useFetch";
import {colors} from "../../../styles/global/colors";
import { FcGoogle } from "react-icons/fc";
import {Wrapper, Form, Text, Title, Link, GoogleButton, CloseIcon, Overlay} from "./form_styles";
import Input from "../atoms/input";
import Button from "../atoms/submit_button";
import { local_server_path } from "../../../global_variables"

const googleAlert = () => {
    alert("Not implemented yet :-)");
}

// https://upmostly.com/tutorials/modal-components-react-custom-hooks - createPortal reference
const Login = ({isShowing, hide, showSignup}) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [oForm, setOForm] = useState({});
    const [data, setData] = useState({});
    const form = useRef(null);

/*     const onSubmit = e => {
        console.log("clicked");
        e.preventDefault();
        console.log(form.current);
        setIsSubmitted(true);
        setOForm(new FormData(form.current));
    }
    useFetch(`/private/api/users/login.php`, {
        method: 'POST',
        body: oForm
    }) */
    const onSubmit = e => {
        console.log("clicked");
        e.preventDefault();
        console.log(form.current);
        setOForm(new FormData(form.current));
        const formData = new FormData(form.current);
        fetch(local_server_path + `/private/api/users/login.php`, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
        .catch(error => console.error("Error:", error))
        .then(response => console.log("Success:", response)); 
    }
    
    return (
        
        isShowing ? ReactDOM.createPortal(
        <React.Fragment>
            <Wrapper>
                <Form ref={form} onSubmit={e => onSubmit(e)}>
                <Title>Login</Title>
                <GoogleButton onClick={googleAlert}>
                    <FcGoogle className="icon" color="#b000b5" size="1.5em" /> Sign up with Google
                </GoogleButton>
                <Text>Or</Text>
                <Input placeholder="Email" name="email" type="text"></Input>
                <Input placeholder="Password" name="password" type="password"></Input>
                <Button type="submit" name="Login"/>
                <Link linkColor="#8C4A6E" href="www.google.com">Forgot your password?</Link>
                <Text>Not a member yet? <Link onClick={showSignup}>Sign up</Link></Text>
                <CloseIcon onClick={hide} color={colors.orange} size="1.5em"/>
                </Form>
            </Wrapper> 
            <Overlay /> 
            </React.Fragment>, document.body
        ) : null
    )}

export default Login;