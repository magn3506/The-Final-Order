import React, {useState} from "react";

import MyComponent from "../components/homepage/atoms/atoms";
import UserForm from "../components/homepage/molecules/userForm";
import useModal from "../functions/useModal";


const IndexPage = () => {
  const {isShowing, toggle} = useModal();
  const [isRegistered, setIsRegistered] = useState(false);

  const isRegisteredEventHandler = () => {
    setIsRegistered(true);
    toggle();
  }
  const isNotRegisteredEventHandler = () => {
    setIsRegistered(false);
    toggle();
  }

  return(
    <div>
      <h1>Landing Pages</h1>
      <MyComponent></MyComponent>
      <UserForm isRegisteredEventHandler={isRegisteredEventHandler} isNotRegisteredEventHandler={isNotRegisteredEventHandler} isRegistered={isRegistered} isShowing={isShowing} hide={toggle}/>
      <button onClick={isRegisteredEventHandler}>Signup</button>
      <button onClick={isNotRegisteredEventHandler}>Login</button>
    </div>
  )
}

export default IndexPage
