import styled from "styled-components"
// GLOBAL
import { colors } from "../../../../styles/global/colors"
import { breakpoints } from "../../../../styles/global/breakpoints"
import { headings, bodyText } from "../../../../styles/global/typography"

// ###############################################
// CLASSROOM CONTAINER MOBILE
// ###############################################
export const Classroom_container_mobile = styled.div`
  background-color: ${colors.dark_dark_purple};
  width: 100%;
  border-radius: 5px;
  overflow: hidden;

  @media ${breakpoints.minDog} {
    display: none;
  }
`
export const Top_mobile = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 2px solid ${colors.purple};
  & > div {
    width: 50%;
  }

  .classroom_img_container {
    img {
      width: 100%;
      margin-bottom: -4px;
    }
  }

  .teacher {
    align-self: center;
    div {
      width: 50%;
      margin: 0 auto;
      img {
        width: 100%;
        border-radius: 50%;
        border: 2px solid ${colors.sand};
      }
    }
    h5 {
      color: ${colors.sand};
      ${bodyText.normalTextBold_16px};
      margin: 15px auto;
      text-align: center;
    }
  }
`
export const Bottom_mobile = styled.div`
  .description {
    padding: 20px 20px;
    h3 {
      ${headings.heading5_18px};
      color: ${colors.sand};
      margin-bottom: 10px;
    }

    p {
      ${bodyText.smallTextReg_13px};
      color: ${colors.white};
      line-height: 140%;
    }
  }
`

export const Stats_mobile = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${colors.super_dark_purple};
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
`
// ###############################################
// CLASSROOM CONTAINER LAPTOP
// ###############################################
export const Classroom_container_laptop = styled.div``
