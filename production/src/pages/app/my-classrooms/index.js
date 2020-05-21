import React, { useEffect, useState } from "react"
import Layout from "../../../components/app/layout/layout"
// ICONS
import Create_classroom_icon from "../../../assets/icons/create_classroom_icon.png"

// HOOKS

// IMPORT STYLED COMPONENTS
import {
  Content_container,
  Header,
  List,
  Btn,
  Btn_con,
  Create_CL_Btn_mobile,
} from "./my_classrooms_styles"

const My_classrooms = () => {
  const [isFollowedRoomsActive, setIsFollowedRoomsActive] = useState(true)
  const [isOwnedRoomsActive, setIsOwnedRoomsActive] = useState(false)

  const handleSetFollowdActive = e => {
    e.preventDefault()
    setIsFollowedRoomsActive(true)
    setIsOwnedRoomsActive(false)
  }

  const handleSetOwnedActive = e => {
    e.preventDefault()
    setIsOwnedRoomsActive(true)
    setIsFollowedRoomsActive(false)
  }

  return (
    <Layout page_title="My ClassRooms">
      <Content_container>
        <Header>
          <Btn_con>
            <Btn
              isActive={isFollowedRoomsActive}
              onClick={e => handleSetFollowdActive(e)}
            >
              Followed Rooms
            </Btn>
            <Btn
              isActive={isOwnedRoomsActive}
              onClick={e => handleSetOwnedActive(e)}
            >
              Owned Rooms
            </Btn>
          </Btn_con>
          <Create_CL_Btn_mobile>
            <img src={Create_classroom_icon} alt="create classroom icon" />
          </Create_CL_Btn_mobile>
        </Header>
        {isFollowedRoomsActive ? (
          <List>
            <li>THIS IS A FOLLOWED ROOM</li>
            <li>THIS IS A FOLLOWED ROOM</li>
            <li>THIS IS A FOLLOWED ROOM</li>
            <li>THIS IS A FOLLOWED ROOM</li>
            <li>THIS IS A FOLLOWED ROOM</li>
            <li>THIS IS A FOLLOWED ROOM</li>
            <li>THIS IS A FOLLOWED ROOM</li>
            <li>THIS IS A FOLLOWED ROOM</li>
          </List>
        ) : (
          <List>
            <li>THIS IS An Owned ROOM</li>
            <li>THIS IS An Owned ROOM</li>
            <li>THIS IS An Owned ROOM</li>
            <li>THIS IS An Owned ROOM</li>
            <li>THIS IS An Owned ROOM</li>
            <li>THIS IS An Owned ROOM</li>
            <li>THIS IS An Owned ROOM</li>
            <li>THIS IS An Owned ROOM</li>
          </List>
        )}
      </Content_container>
    </Layout>
  )
}

export default My_classrooms
