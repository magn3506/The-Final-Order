import styled, { css } from "styled-components"
import { colors } from "../../../styles/global/colors"
import { breakpoints } from "../../../styles/global/breakpoints"
import { caption, bodyText, headings } from "../../../styles/global/typography"

export const Lecture_container = styled.div`
  width: 100%;
  height: 100vh;
  /* min-height: 100vh; */
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
`
export const Header = styled.div`
  background: ${colors.super_dark_purple};
  color: ${colors.sand};
  text-align: center;
  padding: 20px 10px 10px 10px;

  .details {
    display: flex;
    justify-content: space-between;

    h2 {
      ${headings.heading5_18px}
      text-align: left;
      width: 100%;
      margin-left: 0px;
      align-self: flex-end;
      position: relative;
      bottom: -2px;
    }

    .step {
      font-size: 10px;
      white-space: nowrap;
      align-self: flex-end;
      position: absolute;
      top: 5px;
      left: 10px;
    }
    svg {
      width: 20px;
      height: 20px;
      position: absolute;
      top: 5px;
      right: 5px;
    }
  }

  .progress {
    margin-top: 5px;
    height: 5px;
    width: 100%;
    background: ${colors.purple};
    border-radius: 1000px;
    overflow: hidden;
    div {
      height: 100%;
      background: ${colors.orange};
      border-radius: 1000px;
    }
  }
`
export const Slider = styled.div`
  display: flex;
  overflow-x: hidden;
  width: 100%;
  height: 100%;
  align-self: flex-start;
  vertical-align: start;
`
export const Slide = styled.div`
  height: 100%;
  min-height: 100%;
  min-width: 100%;
  padding: 20px 10px;

  .theory {
    ${bodyText.normalTextReg_16px};
    line-height: 130%;

    h3 {
      text-transform: capitalize;
    }
    p {
      margin: 15px 0px;
    }
  }

  transform: ${props => (props.slide ? "translateX(-100%)" : "translateX(0%)")};

  &:nth-child(odd) {
    /* background: red; */
  }
`
export const Nav = styled.div`
  height: 50px;
  width: 100%;
  align-self: flex-end;
  display: flex;

  button {
    align-self: center;
    margin: 0 auto;
    display: flex;
    ${caption.captionBold_18px}
    width: 100%;
    height: 100%;
    border: none;
    justify-content: center;

    div {
      align-self: center;
    }
    svg {
      align-self: center;
      margin: 0 5px;
    }
  }

  .prev {
    background-color: ${colors.sand};
    color: ${colors.dark_dark_purple};
    opacity: 0.2;
    ${props =>
      props.isPrevActive === "hide"
        ? css`
            opacity: 0.2;
          `
        : css`
            opacity: 1;
          `}

    svg {
      fill: ${colors.dark_dark_purple};
    }
  }
  .next {
    background-color: ${colors.dark_dark_purple};
    color: ${colors.sand};
    div {
    }
    svg {
      fill: ${colors.sand};
    }
  }
`
