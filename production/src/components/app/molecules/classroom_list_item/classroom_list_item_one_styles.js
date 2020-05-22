import styled from "styled-components"
// GLOBALS
import { colors } from "../../../../styles/global/colors"
import { breakpoints } from "../../../../styles/global/breakpoints"
import { bodyText, headings } from "../../../../styles/global/typography"

export const Li = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${colors.dark_dark_purple};
  padding: 10px;
  padding-bottom: 20px;
  border-radius: 5px;
  margin-top: 10px;
  text-transform: capitalize;
`
export const Top = styled.div`
  display: flex;
  padding-bottom: 10px;
  margin-bottom: 10px;
  border-bottom: 1px solid ${colors.orange};
  img {
    width: 70px;
    height: 70px;
    border: 1px solid ${colors.light_grey};
    border-radius: 5px;
  }
  div {
    margin-left: 10px;
    h3 {
      ${headings.heading5_18px};
      color: ${colors.sand};
    }
    h4 {
      margin-top: 5px;
      ${bodyText.smallTextBold_13px};
      color: ${colors.orange};
    }
  }
`

export const Bottom = styled.div`
  p {
    ${bodyText.smallTextReg_13px};
    color: ${colors.white};
  }
  a {
    margin: 10px 0px;
    color: ${colors.sand};
  }
`
