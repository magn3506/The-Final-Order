import styled, { css } from "styled-components"
import { colors } from "../../../styles/global/colors"
import { breakpoints } from "../../../styles/global/breakpoints"
// import { caption, bodyText, headings } from "../../../styles/global/typography"

export const Lecture_container = styled.div`
  width: 100%;
  height: 100vh;
  /* min-height: 100vh; */
  border: 1px solid ${colors.light_grey};
  box-shadow: 4px 4px 4px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;

  @media ${breakpoints.minDog} {
    position: relative;
    height: 600px;
    margin-top: 25px;
  }
`

export const Slider = styled.div`
  display: flex;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  align-self: flex-start;
  vertical-align: start;
  background-color: white;
`
export const Slide = styled.div`
  height: 100%;
  min-height: 100%;
  min-width: 100%;
  padding: 20px 10px;
  transform: ${props => (props.slide ? "translateX(-100%)" : "translateX(0%)")};
`
