import React from "react"
import { GlobalStyle } from "../../../styles/global/globalstyles"
// GLOBALS
import { size, breakpoints } from "../../../styles/global/breakpoints"
import { colors } from "../../../styles/global/colors"
import { headings, bodyText, caption } from "../../../styles/global/typography"
// ICONS
import { RiMenu2Line } from "react-icons/ri"
import { FaRegUserCircle } from "react-icons/fa"

import styled from "styled-components"
// STYLED

// LAYOUT
const Wrapper = styled.div``

const Top_container = styled.div`
  background-color: ${colors.super_dark_purple};
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 0px 10px;

  /* ! MAKE EFFECTS GLOBALS*/
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;

  & > div {
    align-self: center;
  }
`
const Bottom_container = styled.div`
  padding-top: 60px;
`

const Page_title = styled.div`
  color: ${colors.sand};
  ${bodyText.normalTextReg_16px}
`

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
          <div>MENU</div>
          <main>{props.children}</main>
        </Bottom_container>
      </Wrapper>
    </div>
  )
}

export default Layout
