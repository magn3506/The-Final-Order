import React, {useState, useEffect} from "react";

const NotFoundPage = () => {
  const [user, setUser] = useState()

  useEffect(() => {
    verifyUser();
  }, []);

  const verifyUser = () => {
    let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    console.log(cookieValue);
    setUser(cookieValue);
    console.log(cookieValue);
    if(!cookieValue == ""){
      console.log('User is logged in');
    }else {
      console.log('No user logged in');
      logoutUser();
    }
  }

  const logoutUser = () => {
    document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  }

  return (
  <div>
    <h1>NOT FOUND</h1>
    <p>Hi, {user}! You just hit a route that doesn&#39;t exist... the sadness.</p>
    <button onClick={logoutUser}>Logout</button>
  </div>
  )
  }

export default NotFoundPage;