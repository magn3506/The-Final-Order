import React from 'react';
import { Link } from "gatsby";
import Logo_2 from "../../../assets/logo/logo_2";
import {Wrapper, LogoCon, Nav, SignUpButton} from "./main_menu_styles";
import useToggleBool from "../../../hooks/useToggleBool";
import Login from "../molecules/login_form";
import Signup from "../molecules/signup_form";


const MainMenu = () => {
    const [isShowingSignup, toggleSignup] = useToggleBool(false);
    const [isShowingLogin, toggleLogin] = useToggleBool(false);
  
    const showSignup = () => {
      toggleSignup(true);
      toggleLogin(false);
    }
    const showLogin = () => {
      toggleLogin(true);
      toggleSignup(false);
    }

    return (
        <Wrapper>
            <LogoCon>
                <Logo_2 />
            </LogoCon>
            <Nav>
                <Link to="404">About</Link>
                <Link to="404">Help</Link>
                <Link onClick={toggleLogin}>Login</Link>
                <SignUpButton onClick={toggleSignup}>Signup</SignUpButton>
            </Nav>
            <Login isShowing={isShowingLogin} showSignup={showSignup} hide={toggleLogin}/>
            <Signup isShowing={isShowingSignup} showLogin={showLogin} hide={toggleSignup}/>
        </Wrapper>
    )
}

export default MainMenu;
