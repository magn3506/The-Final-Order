import React, { Fragment } from "react";
import { GlobalStyle } from "../styles/global/globalstyles";
import Menu from "../components/homepage/molecules/main_menu";
import useToggleBool from "../hooks/useToggleBool";
import Login from "../components/homepage/molecules/login_form";
import Signup from "../components/homepage/molecules/signup_form";
import styled from "styled-components";
import {colors} from "../styles/global/colors";
import {headings, bodyText} from "../styles/global/typography";
import { Helmet } from "react-helmet";
import fav_icon from "../assets/logo/logo_3";

const Wrapper = styled.div`
width: 100%;
height: 100vh;
`;

const Container = styled.div`
width: 100%;
height: 100%;
background: ${colors.dark_dark_purple};
`;

const Header = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

const TitleCon = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
`;

const TitlePart1 = styled.h1`
${headings.heading2_40px};
text-align: center;
color: ${colors.purple};
`;
const TitlePart2 = styled.h1`
${headings.heading2_40px};
text-align: center;
color: ${colors.orange};
margin-left: 10px;
`;

const CTAButton = styled.button`
background: ${colors.sand};
box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.25);
border-radius: 5px;
padding: 10px;
width: 200px;
border: none;
cursor: pointer;
transition: .3s;
${bodyText.normalTextBold_16px};
&:hover {
  opacity: .8;
}
`;

const HeaderText = styled.p`
width: 500px;
text-align: center;
margin: 25px;
color: ${colors.sand};
${bodyText.normalTextReg_16px};
`;

const IndexPage = () => {
  const [isShowingSignup, toggleSignup] = useToggleBool(false);
  const [isShowingLogin, toggleLogin] = useToggleBool(false);

  const showSignup = () => {
    toggleSignup(true);
    toggleLogin(false);
  }
  const showLogin = () => {
    toggleLogin(true);
    toggleSignup(false);
  }

  return(
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
      </Helmet>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Menu/>
          <Header>
            <TitleCon>
              <TitlePart1>Share knowledge,</TitlePart1>
              <TitlePart2>learn together.</TitlePart2>
            </TitleCon>
            <HeaderText>With classrooms it’s easy to create interactive lectures. Everyone kan create and share knowledge, and learn from eachother. On any device.</HeaderText>
            <Login isShowing={isShowingLogin} showSignup={showSignup} hide={toggleLogin}/>
            <Signup isShowing={isShowingSignup} showLogin={showLogin} hide={toggleSignup}/>
            <CTAButton onClick={toggleSignup}>Get started</CTAButton>
          </Header>
        </Container>
      </Wrapper>
    </Fragment>
  )
}

export default IndexPage;