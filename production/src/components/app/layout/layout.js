import React from "react"
import { GlobalStyle } from "../../../styles/global/globalstyles"

const Layout = props => {
  return (
    <>
      <GlobalStyle />
      <head>
        <nav>Layout NA</nav>
        {props.children}
      </head>
    </>
  )
}

export default Layout
