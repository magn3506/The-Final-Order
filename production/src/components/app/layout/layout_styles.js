import styled, { css } from "styled-components"
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
  margin-top: -60px;
  position: fixed;
  z-index: 8888;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);
  display: none;

  ${props =>
    props.menuOpen
      ? css`
          display: block;
        `
      : css``}

  ul {
    width: 260px;
    min-width: 260px;
    height: 100%;
    color: white;
    background-color: ${colors.super_dark_purple};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    /* ANIMATION */
    ${props =>
      props.menuOpen
        ? css`
            animation: in 0.3s ease-in-out;
            animation-timing-function: cubic-bezier(1, 0.145, 0.26, 0.98);

            @keyframes in {
              from {
                transform: translateX(-260px);
              }
              to {
                transform: translateX(0px);
              }
            }
          `
        : css``}

    li {
      a {
        height: 50px;
        align-self: center;
        color: ${colors.white};
        border-bottom: 1px solid ${colors.dark_purple};
        display: flex;
        padding-left: 15px;
        text-decoration: none;
        &:hover {
          cursor: pointer;
          color: ${colors.sand};
        }

        .icon {
          width: 25px;
          align-self: center;
        }
        .text {
          align-self: center;
          margin-left: 15px;
          ${bodyText.normalTextReg_16px}
        }
      }
    }
  }
`
export const Nav_head = styled.div`
  height: 60px;
  width: 260px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: relative;
  background-color: ${colors.super_dark_purple};
  display: flex;
  padding: 0px 15px;
  justify-content: space-between;

  /* ANIMATION */
  ${props =>
    props.menuOpen
      ? css`
          animation: in 0.3s ease-in-out;
          animation-timing-function: cubic-bezier(1, 0.145, 0.26, 0.98);

          @keyframes in {
            from {
              transform: translateX(-260px);
            }
            to {
              transform: translateX(0px);
            }
          }
        `
      : css``}

  & > div {
    align-self: center;
  }

  .close {
    &:hover {
      cursor: pointer;
      svg {
        fill: ${colors.sand};
      }
    }
  }
`
export const Logo_con = styled.div`
  width: 150px;
  transform: translateY(6px);
`
