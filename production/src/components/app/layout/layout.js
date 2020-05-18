import React, { useState, useEffect } from "react"
import { GlobalStyle } from "../../../styles/global/globalstyles"
import { Link } from "gatsby"
import Logo_2 from "../../../assets/logo/logo_2"
import Logo_3 from "../../../assets/logo/logo_3"
// HOOKS
import useWindowSize from "../../../hooks/useWindowSize"
// GLOBALS
import { size, breakpoints } from "../../../styles/global/breakpoints"
import { colors } from "../../../styles/global/colors"
import { headings, bodyText, caption } from "../../../styles/global/typography"
// ICONS
import { RiMenu2Line } from "react-icons/ri"
import { FaRegUserCircle } from "react-icons/fa"
import { FiSearch } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { BsQuestionCircle } from "react-icons/bs"
// IMPORT STYLED COMPONENTS
import {
  Wrapper,
  Top_container,
  Bottom_container,
  Page_title,
  Nav,
  Nav_head,
  Logo_con,
  Main_content,
} from "./layout_styles"

const Layout = props => {
  // STATE
  const [menuOpen, setMenuOpen] = useState(false)
  const [firstLoad, setFirstLoad] = useState(true)

  // CHANGE menuOpen DEPENDING ON SCREEN SIZE
  // ! LOOOK INTO PERFORMANCE / REDUCER
  useEffect(() => {
    const s = 1024

    if (window.innerWidth >= s && firstLoad === true) {
      setMenuOpen(true)
      setFirstLoad(false)
    }
    window.addEventListener("resize", handleResize)
    function handleResize() {
      if (window.innerWidth >= s) {
        setMenuOpen(true)
      }
      if (window.innerWidth < s) {
        setMenuOpen(false)
      }
    }
  })

  const toggleMenuOpen = e => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }

  return (
    <div>
      <GlobalStyle />
      <Wrapper>
        <Top_container>
          <div className="menu">
            <Logo_con className="logo">
              <Logo_2 />
            </Logo_con>
            <RiMenu2Line
              className="burger"
              onClick={e => toggleMenuOpen(e)}
              color={colors.orange}
              size="30px"
            />
          </div>
          <div>
            <Page_title>My ClassRooms</Page_title>
          </div>
          <div>
            <FaRegUserCircle color={colors.orange} size="30px" />
          </div>
        </Top_container>
        <Bottom_container>
          <Nav menuOpen={menuOpen}>
            <Nav_head menuOpen={menuOpen}>
              <Logo_con>
                <Logo_2 />
              </Logo_con>
              <div className="close">
                <MdClose
                  onClick={e => toggleMenuOpen(e)}
                  color={colors.orange}
                  size="30px"
                />
              </div>
            </Nav_head>
            <ul>
              <li>
                <Link to="#">
                  <div className="icon">
                    <Logo_3 />
                  </div>
                  <div className="text">My ClassRooms</div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div className="icon">
                    <FiSearch color={colors.orange} size="100%" />
                  </div>
                  <div className="text">Browse ClassRooms</div>
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div className="icon">
                    <BsQuestionCircle color={colors.orange} size="100%" />
                  </div>
                  <div className="text">Help</div>
                </Link>
              </li>
            </ul>
          </Nav>
          <Main_content>{props.children}</Main_content>
        </Bottom_container>
      </Wrapper>
    </div>
  )
}

export default Layout
