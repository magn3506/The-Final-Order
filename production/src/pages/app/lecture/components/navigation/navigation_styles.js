import styled, { css } from "styled-components"
import { caption } from "../../../../../styles/global/typography"
import { colors } from "../../../../../styles/global/colors"
import { breakpoints } from "../../../../../styles/global/breakpoints"

export const Navigation_con = styled.div`
  height: 50px;
  width: 100%;
  align-self: flex-end;
  display: ${props => (!props.isLectureEnd ? "flex" : "none")};
  @media ${breakpoints.minDog} {
    height: 50px;
    background-color: white;
    justify-content: flex-end;
  }
  button {
    align-self: center;
    margin: 0 auto;
    display: flex;
    ${caption.captionBold_18px}
    width: 100%;
    height: 100%;
    border: none;
    justify-content: center;
    cursor: pointer;
    outline: none;

    div {
      align-self: center;
    }
    svg {
      align-self: center;
      margin: 0 5px;
    }

    @media ${breakpoints.minDog} {
      width: 120px;
      align-self: flex-end;
      margin: 10px 5px;
      border-radius: 1000px;
      justify-content: space-between;
      

      div {
      }
      svg {
        width: 40px;
        height: 40px;
      }
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
            cursor: not-allowed;
          `
        : css`
            opacity: 1;
            cursor: pointer;
          `}


    @media ${breakpoints.minDog} {
      padding-right: 20px;
    }
    svg {
      fill: ${colors.dark_dark_purple};
    }
  }
  .next {
    background-color: ${colors.dark_dark_purple};
    color: ${colors.sand};
    @media ${breakpoints.minDog} {
      padding-left: 20px;
    }
    div {
    }
    svg {
      fill: ${colors.sand};
    }
  }
`
