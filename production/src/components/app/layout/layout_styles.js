import styled from "styled-components"
// GLOBALS
import { size, breakpoints } from "../../../styles/global/breakpoints"
import { colors } from "../../../styles/global/colors"
import { headings, bodyText, caption } from "../../../styles/global/typography"

// LAYOUT
export const Wrapper = styled.div``

export const Top_container = styled.div`
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

export const Page_title = styled.div`
  color: ${colors.sand};
  ${bodyText.normalTextReg_16px}
`
export const Bottom_container = styled.div`
  padding-top: 60px;
  display: flex;
  width: 100%;
`

export const Nav = styled.nav`
  border: 1px solid green;
  margin-top: -60px;
  position: fixed;
  z-index: 8888;
  width: 100vw;
  height: 100vh;
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.75);
  ul {
    width: 260px;
    min-width: 260px;
    height: 100%;
    color: white;
    background-color: ${colors.super_dark_purple};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`
