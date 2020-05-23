import { navigate } from "gatsby"
export const logoutUser = () => {
  document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
  document.cookie = "userID=; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
  navigate("/")
}
