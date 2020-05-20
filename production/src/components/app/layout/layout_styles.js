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

  /* ! MAKE EFFECTS GLOBALS*/
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  position: fixed;

  @media ${breakpoints.minDog} {
    background-color: ${colors.dark_dark_purple};
  }

  & > div {
    align-self: center;
    padding: 15px 15px;
    height: 100%;
    display: flex;

    & > div {
      align-self: center;
    }
  }

  .menu {
    @media ${breakpoints.minDog} {
      background-color: ${colors.super_dark_purple};
    }
    .logo {
      display: none;
    }

    .burger:hover {
      cursor: pointer;
      fill: ${colors.sand};
    }

    @media ${breakpoints.minDog} {
      width: 260px;
      display: flex;
      justify-content: space-between;
      background-color: ${colors.super_dark_purple};
      position: relative;
      /* ! MAKE EFFECTS GLOBALS*/
      box-shadow: 0px -2px 5px rgba(0, 0, 0, 0.75);

      .logo {
        display: block;
      }
      .burger {
        transform: rotate(180deg);
      }
    }
  }
`

export const Page_title = styled.div`
  color: ${colors.sand};
  @media ${breakpoints.minDog} {
    ${bodyText.largeTextReg_24px}
  }
`

export const Nav = styled.nav`
  margin-top: -60px;
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.75);

  display: ${props => (props.menuOpen ? "block" : "none")};

  @media ${breakpoints.minDog} {
    position: relative;
    width: 260px;
    background-color: rgba(0, 0, 0, 0);
  }

  ul {
    width: 260px;
    min-width: 260px;
    height: 100%;
    color: white;
    background-color: ${colors.super_dark_purple};
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media ${breakpoints.minDog} {
      position: fixed;
      top: 60px;
    }

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

        .active {
          background-color: yellow;
          border: 1px solid red;
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

  @media ${breakpoints.minDog} {
    position: fixed;
  }

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

export const Bottom_container = styled.div`
  padding-top: 60px;
  display: flex;
  width: 100vw;
  justify-content: center;
`

export const Main_content = styled.main`
  border: 4px solid green;
  max-width: 850px;
  margin: 0 auto;
`

export const Profile_image = styled.div`
  width: 35px;
  height: 35px;
  background-color: ${colors.orange};
  position: relative;
  border-radius: 50%;
  cursor: pointer;
  transition: 0.2s cubic-bezier(0.96, 0.04, 0.18, 1.04);

  /* ANIMATION */
  ${props =>
    props.profileOpen
      ? css`
          transform: rotate(145deg);
          img {
            transform: rotate(-145deg);
          }
        `
      : css`
          transform: rotate(0deg);
          img {
            transform: rotate(0deg);
          }
        `}

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 2.5px 2.5px;
    position: absolute;
    z-index: 10;
  }

  .triangle {
    position: relative;
    top: -9px;
    left: 16px;
    transform: rotate(-33deg);
  }
`

export const Profile_menu = styled.div`
  width: 150px;
  height: 100px;
  overflow: hidden;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  position: fixed;
  background-color: ${colors.super_dark_purple};

  right: 0;
  top: 60px;

  display: ${props => (props.profileOpen ? "block" : "none")};

  ul {
    width: 100%;
    li {
      width: 100%;
      height: 50px;
      background-color: ${colors.dark_dark_purple};
      color: ${colors.white};
      list-style-type: none;
      padding: 10px 10px;
      display: flex;
      border-bottom: 1px solid ${colors.purple};
      @media ${breakpoints.minDog} {
        background-color: ${colors.super_dark_purple};
      }
      ${bodyText.normalTextReg_16px}

      svg {
        align-self: center;
      }

      .txt {
        margin-left: 10px;
        align-self: center;
      }

      &:hover {
        cursor: pointer;
        background-color: ${colors.sand};
        color: ${colors.black};
        svg {
          fill: ${colors.black};
        }
      }
    }
  }
`
