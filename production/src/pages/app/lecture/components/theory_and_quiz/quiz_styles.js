import styled, { css } from "styled-components"
import { colors } from "../../../../../styles/global/colors"
import { breakpoints } from "../../../../../styles/global/breakpoints"

export const Quiz_con = styled.div`
  @media ${breakpoints.minDog} {
    hr {
      margin-top: 50px;
    }
    h2 {
      text-align: center;
    }
  }

  form {
    display: flex;
    flex-direction: column;

    @media ${breakpoints.minDog} {
      display: grid;
      grid-template-columns: 1fr 1fr;
      div {
        margin: 10px 10px;
      }
    }
  }
`

export const Answer_con = styled.div`
  background-color: ${colors.super_dark_purple};
  color: ${colors.white};
  border-radius: 5px;
  margin: 10px 0px;
  display: flex;
  label {
    padding: 20px 30px;
    cursor: pointer;
    display: flex;

    input[type="radio"] {
      display: none;
    }
    div {
      position: relative;
      width: 0px;
      height: 0px;
      img {
        width: 50px;
        height: 50px;
        position: absolute;
        left: -40px;
        top: -25px;
      }
    }
  }

  ${props =>
    props.checked
      ? css`
          color: ${colors.sand};
        `
      : css`
          color: ${colors.white};
        `}
`
