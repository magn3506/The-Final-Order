import styled from "styled-components"
// GLOBAL
import { colors } from "../../../styles/global/colors"
import { breakpoints } from "../../../styles/global/breakpoints"
import { headings, bodyText } from "../../../styles/global/typography"

// WRAPPER
export const Content_wrapper = styled.div`
  width: 100%;
  max-width: 750px;
  margin: 0 auto;
  padding: 10px;
`
// HEADING
export const Heading = styled.div`
  border: 1px solid green;
  display: none;
`

// CONTAINER
export const Content_container = styled.div`
  width: 100%;
`

// LIST
export const List = styled.ul`
  width: 100%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;

  h2 {
    margin-bottom: 10px;
  }
`

export const Item = styled.li`
  margin: 5px 0px;
  list-style-type: none;
  width: 100%;
  display: flex;
  height: 40px;

  .index {
    align-self: center;
    margin-right: 10px;
    color: ${colors.dark_grey};

    @media ${breakpoints.minDog} {
      ${headings.heading2_40px};
    }
  }

  .card {
    height: 100%;
    width: 100%;
    padding: 5px 5px 5px 15px;
    display: flex;
    justify-content: space-between;
    background-color: ${colors.dark_dark_purple};
    color: ${colors.sand};
    border-radius: 1000px;
    align-self: center;
    font-family: "roboto";
    font-size: 10px;
    letter-spacing: 1px;
    .title {
      align-self: center;
      width: 100%;
    }
    .progress {
      align-self: center;
      text-align: right;
      width: 100%;
      margin-right: 25px;
    }

    a {
      display: flex;
      align-self: center;
      text-decoration: none;
      color: ${colors.white};
      background-color: ${colors.orange};
      height: 100%;
      border-radius: 1000px;
      padding: 0px 10px 0px 5px;
      svg {
        align-self: center;
      }
      div {
        align-self: center;
        margin-left: 5px;
      }
    }
  }
  @media ${breakpoints.minDog} {
    height: 60px;
    .card {
      ${headings.heading5_18px};
      padding: 10px 10px 10px 20px;

      a {
        ${bodyText.smallTextBold_13px};

        svg {
          width: 30px;
          height: 30px;
        }
      }
    }
  }
`
