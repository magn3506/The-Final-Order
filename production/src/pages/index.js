import React from "react";
import Test from "../components/homepage/atoms/test"
import useToggleBool from "../hooks/useToggleBool";
import Login from "../components/homepage/molecules/login_form";
import Signup from "../components/homepage/molecules/signup_form";

const IndexPage = () => {
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

  return(
    <div>
      <h1>Landing Pages</h1>
      <Test></Test>
      <Login isShowing={isShowingLogin} showSignup={showSignup} hide={toggleLogin}/>
      <Signup isShowing={isShowingSignup} showLogin={showLogin} hide={toggleSignup}/>
      <button onClick={toggleSignup}>Signup</button>
      <button onClick={toggleLogin}>Login</button>
    </div>
  )
}

export default IndexPage;