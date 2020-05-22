import React, { useState, useEffect } from "react"
import { GlobalStyle } from "../../../styles/global/globalstyles"
import { Link } from "gatsby"
import Logo_2 from "../../../assets/logo/logo_2"
import Logo_3 from "../../../assets/logo/logo_3"
import fav_icon from "../../../assets/logo/logo_3.png"
// REACT HELMET
import { Helmet } from "react-helmet"
// HOOKS

// FUNCTIONS
import { logoutUser } from "../../../functions/logout"
import { verifyUser } from "../../../functions/verifyUser"
// GLOBALS
import { colors } from "../../../styles/global/colors"
// ICONS
import { RiMenu2Line } from "react-icons/ri"
import { FiSearch } from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { BsQuestionCircle } from "react-icons/bs"
import { GoArrowSmallRight } from "react-icons/go"
import { AiOutlineLogout } from "react-icons/ai"
import { FaUserNinja } from "react-icons/fa"
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
  Profile_image,
  Profile_menu,
} from "./layout_styles"

const Layout = props => {
  // STATE
  // ! AFTER MERGE  USE JAKOBS HOOK
  const [menuOpen, setMenuOpen] = useState(true) // IS MENU OPEN OR CLOSE
  const [profileOpen, setProfileOpen] = useState(false)

  // WHEN FIRST LOADED MAKE SURE MENU IS OPEN WHEN VW > 1024
  const [firstLoad, setFirstLoad] = useState(true)
  // CHANGE menuOpen DEPENDING ON SCREEN SIZE
  // ! LOOOK INTO PERFORMANCE / REDUCER

  useEffect(() => {
    verifyUser()

    const s = 1024

    // Makes sure menu is OPEN when loading page > s vw.
    if (window.innerWidth >= s && firstLoad === true) {
      setMenuOpen(true)
      setFirstLoad(false)
    }
    // Makes sure menu is OPEN when loading page < s vw.
    if (window.innerWidth < s && firstLoad === true) {
      setMenuOpen(false)
      setFirstLoad(false)
    }

    // ON WINDOW RESIZE OPEN MENU IN LAOPTOP
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

  // TGGLE MENU OPEN / CLOSE
  const toggleMenuOpen = e => {
    e.preventDefault()
    setMenuOpen(!menuOpen)
  }
  const toggleProfileOpen = e => {
    e.preventDefault()
    setProfileOpen(!profileOpen)
  }

  // STYLED FOR ACTIVE LINKS
  // TODO: SEE IF CAN BE MOVED INTO STYLES.js
  const active_link_style = {
    backgroundColor: `${colors.purple}`,
    borderLeft: `5px solid ${colors.sand}`,
    paddingLeft: "10px",
  }

  // TODO: CLEAN UP. MOVE COMPONENT INTO SEPERATE FILES ? MAYBE
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{props.page_title}</title>
        <link rel="icon" type="image/png" href={fav_icon} />
      </Helmet>
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
          <div onClick={e => toggleProfileOpen(e)}>
            <Profile_menu profileOpen={profileOpen}>
              <ul>
                <li>
                  <FaUserNinja color={colors.orange} size="20px" />
                  <div className="txt">Profile</div>
                </li>

                <li onClick={logoutUser}>
                  <AiOutlineLogout color={colors.orange} size="25px" />
                  <div className="txt">Log out</div>
                </li>
              </ul>
            </Profile_menu>
            <Profile_image profileOpen={profileOpen}>
              <img
                src="https://www.placecage.com/gif/30/30"
                alt="profile image"
              />
              <div className="triangle">
                <GoArrowSmallRight color={colors.orange} size="30px" />
              </div>
            </Profile_image>
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
                <Link to="app/my-classrooms/" activeStyle={active_link_style}>
                  <div className="icon">
                    <Logo_3 />
                  </div>
                  <div className="text">My ClassRooms</div>
                </Link>
              </li>
              <li>
                <Link
                  to="app/browse-classrooms/"
                  activeStyle={active_link_style}
                >
                  <div className="icon">
                    <FiSearch color={colors.orange} size="100%" />
                  </div>
                  <div className="text">Browse ClassRooms</div>
                </Link>
              </li>
              <li>
                <Link to="app/help/" activeStyle={active_link_style}>
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
