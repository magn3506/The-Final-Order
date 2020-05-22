import { logoutUser } from "./logout"
//We should maybe create a function that handles verification? instead of rewriting this code. Lets do that
//Just need to know how to add a variable/param to the replace expression
export const verifyUser = () => {
  let cookieValue = document.cookie.replace(
    /(?:(?:^|.*;\s*)email\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  )
  if (!cookieValue == "") {
    console.log(cookieValue + " is logged in")
  } else {
    logoutUser()
  }
}
