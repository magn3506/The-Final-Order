import styled from "styled-components"
import { bodyText } from "../../../../styles/global/typography"

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 5px;
  width: 600px;
  margin: 50px auto;
`
export const Box = styled.div`
  width: 200px;
  height: 100px;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: white;
  background-color: ${props => props.bg_color};
  border-radius: 5px;
  box-shadow: 4px 2px 2px rgba(0, 0, 0, 0.2);
  text-shadow: 0px 0px 8px rgba(0, 0, 0, 1);
  ${bodyText.normalTextBold_16px}

  & > div {
    align-self: center;
    margin-top: 25px;

    div {
    }
  }
`
