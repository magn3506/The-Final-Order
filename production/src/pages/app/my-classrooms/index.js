import React, { useEffect, useState } from "react"
import Layout from "../../../components/app/layout/layout"
import { Link } from "gatsby"
// ICONS
import Create_classroom_icon from "../../../assets/icons/create_classroom_icon.png"
import { AiOutlinePlus } from "react-icons/ai"

// HOOKS
import useFetch from "../../../hooks/useFetch"

// IMPORT STYLED COMPONENTS
import {
  Content_container,
  Header,
  List,
  Btn,
  Btn_con,
  Create_CL_Btn_mobile,
  Create_CL_Btn_laptop,
  Classroom,
} from "./my_classrooms_styles"

const My_classrooms = () => {
  // STATE
  const [isFollowedRoomsActive, setIsFollowedRoomsActive] = useState(true)
  const [isOwnedRoomsActive, setIsOwnedRoomsActive] = useState(false)

  // FETCH DATA
  const owned_room_api =
    "/private/api/classrooms/get-owned-rooms-from-user.php?user_id=" + "1"
  const owned_res = useFetch(owned_room_api, {})
  const owned_rooms_arr = owned_res.response

  const followed_room_api =
    "/private/api/classrooms/get-followed-rooms-from-user.php?user_id=" + "1"
  const followed_res = useFetch(followed_room_api, {})
  const followed_rooms_arr = followed_res.response

  // HANDELERS
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
          <Create_CL_Btn_laptop>
            <div>Create Classroom</div>
            <AiOutlinePlus size="30px" />
          </Create_CL_Btn_laptop>
        </Header>
        {isFollowedRoomsActive ? (
          <List>
            {!followed_rooms_arr ? (
              <div>LOADING...</div>
            ) : (
              followed_rooms_arr.map(e => {
                const room = e.classroom
                return (
                  <Classroom>
                    <h3>{room.title}</h3>
                    <p>{room.description}</p>
                    <Link to="app/classroom" state={{ classroom_id: room.id }}>
                      see more
                    </Link>
                  </Classroom>
                )
              })
            )}
          </List>
        ) : (
          <List>
            {!owned_rooms_arr ? (
              <div>LOADING...</div>
            ) : (
              owned_rooms_arr.map(e => {
                return <li>THIS IS A OWned ROOM</li>
              })
            )}
          </List>
        )}
      </Content_container>
    </Layout>
  )
}

export default My_classrooms
