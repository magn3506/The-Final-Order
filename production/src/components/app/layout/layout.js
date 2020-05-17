import React from "react"
import { GlobalStyle } from "../../../styles/global/globalstyles"
// GLOBALS
import { size, breakpoints } from "../../../styles/global/breakpoints"
import { colors } from "../../../styles/global/colors"
import { headings, bodyText, caption } from "../../../styles/global/typography"
// ICONS
import { RiMenu2Line } from "react-icons/ri"
import { FaRegUserCircle } from "react-icons/fa"
// IMPORT STYLED COMPONENTS
import {
  Wrapper,
  Top_container,
  Bottom_container,
  Page_title,
  Nav,
} from "./layout_styles"

const Layout = props => {
  return (
    <div>
      <GlobalStyle />
      <Wrapper>
        <Top_container>
          <div>
            <RiMenu2Line color={colors.orange} size="30px" />
          </div>
          <div>
            <Page_title>My ClassRooms</Page_title>
          </div>
          <div>
            <FaRegUserCircle color={colors.orange} size="30px" />
          </div>
        </Top_container>
        <Bottom_container>
          <Nav>
            <ul>
              <li>Logo x</li>
              <li>menu 1</li>
              <li>menu 2</li>
              <li>menu 3</li>
            </ul>
          </Nav>
          <main>{props.children}</main>
        </Bottom_container>
      </Wrapper>
    </div>
  )
}

export default Layout
