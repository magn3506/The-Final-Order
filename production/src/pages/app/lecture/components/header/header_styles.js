import styled, { css } from "styled-components"
import { colors } from "../../../../../styles/global/colors"
import { breakpoints } from "../../../../../styles/global/breakpoints"
import {
  caption,
  bodyText,
  headings,
} from "../../../../../styles/global/typography"

export const Header = styled.div`
  background: ${colors.super_dark_purple};
  color: ${colors.sand};
  text-align: center;
  padding: 20px 10px 10px 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

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

      @media ${breakpoints.minDog} {
        ${headings.heading4_24px}
        text-align: center;
        margin-bottom: 5px;
      }
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
