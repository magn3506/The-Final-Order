import styled from "styled-components";
import {colors} from "../../../styles/global/colors";
import {bodyText} from "../../../styles/global/typography";

export const Wrapper = styled.div`
display: flex;
width: 100%;
flex-direction: row;
justify-content: space-between;
padding: 5px;
`

export const LogoCon = styled.div`
  width: 150px;
  transform: translateY(6px);
`;

export const Nav = styled.nav`
    margin-right: 25px;
& a{
    text-decoration: none;
    margin-right: 15px;
    transition: .3s;
    color: ${colors.white};
    ${bodyText.normalTextBold_16px};
    &:hover {
        opacity: .8;
    }
}
`;

export const SignUpButton = styled.button`
background: ${colors.orange};
color: ${colors.white};
border: none;
cursor: pointer;
padding: 7px 25px 7px 25px;
box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
${bodyText.smallTextBold_13px}
transition: .3s;

&:hover {
    opacity: .8;
}
`;