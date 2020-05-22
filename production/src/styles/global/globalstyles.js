import { createGlobalStyle } from "styled-components"
import { colors } from "./colors"

export const GlobalStyle = createGlobalStyle`
 @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100;300;400;500;700;800;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
  } 

 body{
    font-family: 'Roboto', sans-serif;
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    overflow-y: scroll;
    background: ${colors.light_grey_pruple};
 
 }
`
