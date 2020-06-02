import styled, { css } from "styled-components"
import { caption } from "../../../../../styles/global/typography"
import { colors } from "../../../../../styles/global/colors"

export const Navigation_con = styled.div`
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
    cursor: pointer;

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
            cursor: not-allowed;
          `
        : css`
            opacity: 1;
            cursor: pointer;
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
