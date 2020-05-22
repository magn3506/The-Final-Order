import styled, { css } from "styled-components"
// GLOBALS
import { breakpoints } from "../../../styles/global/breakpoints"
import { colors } from "../../../styles/global/colors"
import { bodyText } from "../../../styles/global/typography"

// ############################################################

export const Content_container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 0px 10px;
`

export const Header = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  display: flex;
  width: 100%;

  @media ${breakpoints.minDog} {
    border-bottom: 1px solid ${colors.super_dark_purple};
    justify-content: space-between;
  }
`

export const Btn_con = styled.div`
  width: 100%;
  max-width: 400px;
  display: flex;
  background-color: ${colors.dark_dark_purple};
  border-radius: 5px 5px 0px 0px;
  overflow: hidden;
  margin: 0 auto;

  @media ${breakpoints.minDog} {
    margin: 0 0;
  }
`
export const Btn = styled.button`
  width: 100%;
  min-width: 150px;
  padding: 15px 20px;
  color: white;
  ${bodyText.smallTextBold_13px}
  text-align: center;
  border: none;
  border-bottom: ${props =>
    props.isActive ? `4px solid ${colors.orange}` : "4px solid transparent"};
  color: ${props => (props.isActive ? `${colors.sand}` : `${colors.white}`)};
  background-color: ${colors.dark_dark_purple};

  &:hover {
    color: ${colors.sand};
    cursor: pointer;
  }
`

export const List = styled.ul``
export const Classroom = styled.li`
  color: red;
`

// ################################
// #### CREATE CLASSROOM BTN #####
// ################################

export const Create_CL_Btn_mobile = styled.button`
  position: fixed;
  bottom: 10px;
  right: 10px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  border: 3px solid ${colors.sand};
  background-color: ${colors.super_dark_purple};
  padding: 7px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.75);
  img {
    width: 100%;
  }
  @media ${breakpoints.minDog} {
    display: none;
  }
`

export const Create_CL_Btn_laptop = styled.button`
  display: none;
  @media ${breakpoints.minDog} {
    display: block;
    display: flex;
    height: 50px;
    border-radius: 5px;
    overflow: hidden;
    border: 1px solid black;
    background-color: transparent;
    ${bodyText.normalTextReg_16px}
    transform: translateY(-15px);

    div {
      align-self: center;
      padding: 0px 20px;
      transform: translateY(-2px);
    }
    svg {
      border-left: 1px solid black;
      height: 50px;
      width: 50px;
      padding: 10px;
    }

    &:hover {
      cursor: pointer;
      color: ${colors.purple};
      border: 1px solid ${colors.purple};
      svg {
        fill: ${colors.purple};
        border-left: 1px solid ${colors.purple};
      }
    }
  }
`

// ################################
